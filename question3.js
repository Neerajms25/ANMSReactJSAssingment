/*Question 3:

Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

Answer: 

Description:

Here already the array is sorted and only single number is occurs twice as mentioned in the question.
So, it is enough to check the consecutive numbers are same or not.
If the numbers are equal then we can store in the dup variable and print it.*/

import React from "react";

class NumOccuredTwice extends React.Component {
  render() {
    let array = [1, 2, 3, 4, 5, 5];
    let dup = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] === array[i]) {
        dup = array[i];
      }
    }
   return <div> The number occured twice in the array is <b>{dup}</b></div>
    
  }
}

export default NumOccuredTwice;

