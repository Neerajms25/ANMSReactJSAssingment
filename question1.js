/*Question 1

Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

Answer:

Process :
Here we use for loop to lopp throughout array and cheked the number is even or not.
If it is even then added into array and printed finally. */

import React from "react";

class Evennumbers extends React.Component {
  render() {
    var rows = [];
    var evennum = [];
    for (var i = 0; i < rows.length; i++) {
      if (rows[i] % 2 === 0) {
        evennum.push(<li>{rows[i]}</li>);
      }
    }

    return <div>{evennum}</div>;
  }
}

export default Evennumbers

