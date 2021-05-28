/*
Question 2

Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
 
Answer:

Description:

Here we consider the count of maximum consecutive 1s.
Then we store the maximum count in maxCount every time we get greater than the previous one while traversing the array.
Finally we print the maximum consicutive 1s value, in the given array.
*/
import React from "react";

class MaxConsicutive1s extends React.Component {
  render() {
    var nums = [0,0,1,1,0,0,0,1,0,0,1,1,1,0]
    var maxCount = 0;
    
    var count = 0;
    for (var i in nums) {
        count = nums[i] === 1 ? count + 1 : 0;
        if (count > maxCount) {
            maxCount = count;
        }
    }
    var mC1s = maxCount;
   return <div> The Maximum consecutive 1s in the array are <b>{mC1s}</b></div>
    
  }
}

export default MaxConsicutive1s;

