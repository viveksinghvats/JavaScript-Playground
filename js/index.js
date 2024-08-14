
// function promise(){
//     return new Promise((resolve, reject) => {
//         const t = setTimeout(() => {
//             resolve('Resolved First');
//         }, 20000);
//         const v = setTimeout(() => {
//             reject('Rejected First');
//         }, 3000)
//     });
// }

// promise().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })



let check = {};

let v1 = findValue(2, check);
let v2 = findValue(1, check);
let v3 = findValue(2, check);




function findValue(value, map) {
    if (map[value]) {
        return map[value];
    } else {
        map[value] = 1;
        return 1;
    }
}

















//       term = ((((2 * n) - j + 2) * (j - 1)) / 2);   ==> is basically total numbers that already printed before that column j.
//       i.e j = 3, we have alreday printed 5 and 4 numbers in previous two columns, so term = 9
//       for any jth column total numbers thats already printed is n + (n - 1) + (n - 2) + (n - 3)+ ......+ (n - (j + 2)) = ((((2 * n) - j + 2) * (j - 1)) / 2)

// 1
// 2,9 => term = ((((2 * n) - j + 2) * (j - 1)) / 2);   ==> is basically total numbers that already printed before that column j.
// 3,8,10  => when j is odd (((2n - j + 2) * (j - 1)) / 2) + (i - j + 1)
// 4,7,11,14 => when j is even (((2n - j + 2) * (j - 1)) / 2) + (n - i + 1)
// 5,6,12,13,15

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   let str = '';
//   for (let j = 1; j <= i; j++) {
//     const term = ((((2 * n) - j + 2) * (j - 1)) / 2);
//     if (j % 2 == 0) {
//       str += (term + (n - i + 1)) + ' ';
//     } else {
//       str += (term + (i - j + 1)) + ' ';
//     }
//   }
//   console.log(str);
// }
//

// let temp = '1236,1567';
// temp = temp.split(',');
// temp = new Set(temp);
// if(temp.has(1236+"")){
//     console.log('working');
// }else{
//     console.log('not working');
// }

// let arr = [{ type: 'a', value: 1 }, { type: 'b', value: 2 }];
// arr = arr.filter(i => i.type === 'c').sort((a, b) => a.value - b.value);
// console.log(arr);



// var canArrange = function (arr, k) {
//   let res = Array(k).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i] % k;
//     if(temp < 0){
//       temp += k;
//     }
//     res[temp]++;
//   }
//   for (let i = 0; i <= Math.floor(k / 2); i++) {
//     if (i === 0 && res[i] % 2 !== 0) {
//       return false;
//     } else if (k % 2 === 0 && i === k - 1 && res[i] % 2 !== 0) {
//       return false;
//     } else {
//       if (res[i] !== res[k - i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3);


// const arr = [1, 2, 3, 4];
// const newArr = [];
// arr.map(i => {
//   if (i % 2 === 0) return;
//   newArr.push(i);
// });
// console.log(newArr);


// var matrixReshape = function (mat, r, c) {
//   let m = mat.length;
//   let n = mat[0].length;
//   if ((m * n) !== (r * c)) {
//       return mat;
//   }
//   let result = Array.from({ length: r }, () => Array(c).fill(0));
//   for (let i = 0; i < r; i++) {
//       for (let j = 0; j < c; j++) {
//           const temp = (((i) * c) + (j + 1));
//           let oldRow = Math.floor(temp / n);
//           let oldColumn = (temp % n);
//           if(oldColumn === 0){
//               oldRow--;
//               oldColumn = n-1;
//           }
//           result[i][j] = mat[oldRow][oldColumn-1];
//       }
//   }
//   return result;
// };

// console.log(matrixReshape([[1,2,3],[4,5,6]], 3, 2));




// var maxChunksToSorted = function (arr) {
//   let leftmax = Array(arr.length).fill(-1);
//   let rightmin = Array(arr.length).fill(-1);
//   leftmax[0] = arr[0];
//   rightmin[arr.length - 1] = arr[arr.length - 1];
//   for (let i = 1; i < arr.length; i++) {
//       leftmax[i] = Math.max(arr[i], leftmax[i - 1]);
//       rightmin[arr.length - 1 - i] = Math.min(arr[arr.length - 1 - i], rightmin[arr.length - i]);
//   }
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (i != 0 && !(arr[i] <= leftmax[i])) {
//           continue;
//       }
//       if ((i != arr.length - 1) && !(arr[i] <= rightmin[i + 1])) {
//           continue;
//       }
//       result++;
//   }
//   return result;
// };

// console.log(maxChunksToSorted([2,1,3,4,4]));








// const temp = 1;
// let set1 = new Set([1, 2, 3,   4, 1, 5]);
// if (set1.has(1)) {
//   set1.delete(1);
//   set1.delete(9);
// }
// set1 = Array.from(set1);
// console.log(set1);
// var trapRainWater = function (heightMap) {
//   let leftMax = Array.from({ length: heightMap.length }, () => Array(heightMap[0].length).fill(-1));
//   for (let i = 0; i < heightMap.length; i++) {
//     for (let j = 0; j < heightMap[0].length; j++) {
//       if (j == 0) {
//         leftMax[i][j] = heightMap[i][j];
//       } else {
//         leftMax[i][j] = Math.max(leftMax[i][j - 1], heightMap[i][j]);
//       }
//     }
//   }
//   let topMax = Array.from({ length: heightMap.length }, () => Array(heightMap[0].length).fill(-1));
//   for (let i = 0; i < heightMap.length; i++) {
//     for (let j = 0; j < heightMap[0].length; j++) {
//       if (i == 0) {
//         topMax[i][j] = heightMap[i][j];
//       } else {
//         topMax[i][j] = Math.max(topMax[i - 1][j], heightMap[i][j]);
//       }
//     }
//   }
//   let rightMax = Array.from({ length: heightMap.length }, () => Array(heightMap[0].length).fill(-1));
//   for (let i = 0; i < heightMap.length; i++) {
//     for (let j = heightMap[0].length - 1; j >= 0; j--) {
//       if (j == heightMap[0].length - 1) {
//         rightMax[i][j] = heightMap[i][j];
//       } else {
//         rightMax[i][j] = Math.max(rightMax[i][j + 1], heightMap[i][j]);
//       }
//     }
//   }
//   let downMax = Array.from({ length: heightMap.length }, () => Array(heightMap[0].length).fill(-1));
//   for (let i = heightMap.length - 1; i >= 0; i--) {
//     for (let j = 0; j < heightMap[0].length; j++) {
//       if (i == heightMap.length - 1) {
//         downMax[i][j] = heightMap[i][j];
//       } else {
//         downMax[i][j] = Math.max(downMax[i + 1][j], heightMap[i][j]);
//       }
//     }
//   }
//   let totalWater = 0;
//   for (let i = 1; i < heightMap.length - 1; i++) {
//     for (let j = 1; j < heightMap[0].length - 1; j++) {
//       totalWater += (Math.min(leftMax[i][j], rightMax[i][j], topMax[i][j], downMax[i][j]) - heightMap[i][j]);
//     }
//   }
//   return totalWater;
// }


// const input = [[12, 13, 1, 12], [13, 4, 13, 12], [13, 8, 10, 12], [12, 13, 12, 12], [13, 13, 13, 13]];
// console.log(trapRainWater(input));