const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM customer", (err, rows, fields) => {
    res.send(rows);
  });
});
//image 폴더에서 upload 폴더에 접근해서
//사용자가 직접 프로필 이미지로 사용할 수 있게
app.use("/image", express.static("./upload"));

app.post("/api/customers", upload.single("image"), (req, res) => {
  //첫번째 값은 자동 증가로 했기에 null 값으로 두고 총 5개의 값이 전달
  let sql = "INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?)";
  //사용자는 image라는 이름의 변수로 실제로 프로필 이미지에 bynary data로 우리 서버에 전송을 한다  이 때 filename은 multer가 겹치지 않게 자동으로 설정해준다
  let image = "/image/" + req.file.filename; //사용자는 image폴더에 있는 경로로 접근
  let name = req.body.name;
  let birth = req.body.birth;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birth, gender, job]; //차례대로 실제 db에 들어감
  //connection을 이용해 query함수 안에서 파라미터를 전송할 수 있게
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`여기 포트는 ${port}번 입니다`);
});
