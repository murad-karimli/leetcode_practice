//896.
// var isMonotonic = function (nums) {
//   let increasing;
//   let isMonoton = true;
//   if (nums[0] < nums[1]) {
//     increasing = true;
//   } else {
//     increasing = false;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (increasing) {
//       if (nums[i] > nums[i + 1]||nums[i] !== nums[i + 1]) {
//         isMonoton = false;
//       }
//     } else {
//       if (nums[i] < nums[i + 1]||nums[i] !== nums[i + 1]) {
//         isMonoton = false;
//       }
//     }
//   }
//   return isMonoton;
// };
