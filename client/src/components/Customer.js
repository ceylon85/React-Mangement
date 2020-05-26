import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import CustomerDelete from './CustomerDelete';
class Customer extends React.Component {
  render() {
    return (
      
        <TableRow>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>
            <img src={this.props.image} alt="propfile" />
          </TableCell>
          <TableCell>{this.props.name}</TableCell>
          <TableCell>{this.props.birth}</TableCell>
          <TableCell>{this.props.gender}</TableCell>
          <TableCell>{this.props.job}</TableCell>
          <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
        </TableRow>
      
    );
  } 
}

export default Customer;
