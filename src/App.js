import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길이",
    birth: "950921",
    gender: "남자",
    job: "대학생",
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
];

function App() {
  return (
    <div>
      {customers.map((c, index) => {
        return (
          <Customer key={index}
            id={c.id}
            image={c.image}
            name={c.name}
            birth={c.birth}
            gende={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
