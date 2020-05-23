const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길이",
      birth: "950921",
      gender: "남자",
      job: "학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "박길이",
      birth: "960511",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "최길이",
      birth: "970320",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => {
  console.log(`여기 포트는 ${port}번 입니다`);
});
