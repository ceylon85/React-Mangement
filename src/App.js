import React,{Component} from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Paper
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const styles= theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:'auto'
  },
  table:{
    minWidth: 1080
  }
})

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

class App extends Component {
  render(){
    const {classes} = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c, index) => {
            return (
              <Customer
                key={index}
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

export default withStyles(styles)(App);
