// let students = ["Aditya", "Aditi","akshat"];

// console.log(students);



// let marks = [56,67,78];

// // in javascript we can create array of different data type 



// let info = ["Aditya", 23, 89];

// console.log(info);



// let empArr = [];

// console.log(empArr);

// console.log(empArr[0]);


// console.log(info[0]);

// console.log(info[0][0]);   // it will print 0th index of 0th inde element   print "A" of Aditya

// console.log(info[0].length);



// arrays are mutable in javascript

// let fruits = ["apple", "banana","pineapple"];

// fruits[1] = "litchi";


// console.log(fruits);

// fruits[11] = "papaya";   // it will create the array at the 11th index , nevertheless of the size of the array

// console.log(fruits);  


// ARRAYS METHODS

// PUSH: add to end of an array

// pop : delete the last element of an array


// let cars = ["audi", "bmw", "rolls royce", "ferrari"];

// cars.push("toyota");

// cars.push("hyundai");
// console.log(cars);

// cars.pop();

// console.log(cars);

// cars.pop();  // delete  to end

// console.log(cars);


// unshift : add to the start
// shift: delete from the start and return it


// cars.unshift("toyota");

// console.log(cars);


// cars.unshift("ferrari");

// console.log(cars);


// cars.shift();

// console.log(cars);


// cars.shift();


// console.log(cars);



// let followers = ["a", "b", "c"];

// let blocked = followers.shift();

// console.log(blocked);


// practice question


// let months = ['january', 'july','march','august'];

// months.shift();

// months.shift();


// months.unshift("june");

// months.unshift("july");


// console.log(months);


// let cars = ["audi", "bmw", "rolls royce", "ferrari"];

// console.log(cars.indexOf("audi"));


// console.log(cars.indexOf("ferrari"));
// console.log(cars.indexOf("Ferrari"));


// console.log(cars.indexOf("mercedez"));   // -1   not found


// // includes => return boolean output, if exist returns true else false


// console.log(cars.includes("audi"));

// console.log(cars.includes("mercedes"));



// concate => merges 2 arrays



// let primary = ['red', 'yellow', 'orange'];


// let secondary = ['green', 'blue', 'violet'];



//  let allColors = primary.concat(secondary);
// //  let allColors = secondary.concat(primary);


// console.log(primary);

// console.log(secondary);

// console.log(allColors);



// // reverse =>   reverse the array ,and changes the orignal array


// primary.reverse();

// console.log(primary);   // reverse  the original array

// primary.reverse();

// console.log(primary); 



// // slice=> copies the portion in an array


// let colors = ["red", "yellow", "blue", "orange","pink", "white"];

// console.log(colors.slice());  // returns the full array

// console.log(colors.slice(2));

// console.log(colors.slice(2, 3));  // return blue , from start index to end - 1

// console.log(colors.slice(length - 1));


// console.log(colors.slice(-2));  // - 2 means , length - 2 = 6 - 2 = 4th index  , return pink and white

// console.log(colors.slice(6));

// console.log(colors.slice(length));


// splice method =>   removes/ replaces/ add elements in space


// splice (start, deleteCount, item0, .. ItemN);  // it changes the orignal array , whereas slice makes the copy of array


// let colors = ["red", "yellow", "blue", "orange","pink", "white"];


// console.log(colors.splice(4));
// console.log(colors);

// // console.log(colors.splice(0, 1));   // start , delete count, removes element at 0 index  and returns it

// colors.splice(0,1, "grey", "black");   // add grey , black to the array start


// console.log(colors);  


// sort an array =>  it only sorts the array of strings and characters, 
// not numbers , because it converts the array elements into unicode and then sort them.


// let cars = ["audi", "bmw", "rolls royce", "ferrari"];

// console.log(cars.sort());


// let marks = [100, 54,76,58,94];

// console.log(marks.sort()); // here ., the numbers will not be sorted



// practice ques 1


// let months = ['january', 'july', 'march', 'august'];

// months.splice(0,1);



// months.splice(1,0, "june");


// console.log(months);


// months.splice(0,2, "july","june");

// console.log(months);


// // 2 


// let lang = ['c','c++', 'html','javascript', 'python','java','c#','sql'];


// lang.reverse();

// console.log(lang);


// console.log(lang.indexOf('javascript'));

// console.log(lang[0][1]);



//  let newLang = lang.reverse().indexOf("javascript");

//  console.log(newLang);


//  console.log(lang.reverse().indexOf("javascript"));





// array references => array in memory

// "abc" == "abc";  // true

// 123 == "123"; //true



// [1] == [1]   // return false always because javascript compares objects by reference not by value(means address in memory)

// [1] === [1] // return false


// example of array references



// let arr = ['a','b','c','d'];


// let arrCopy = arr;

// console.log(arrCopy);


// console.log(arr == arrCopy);  // returns true , because both array refers to same memory


// arr.push("e");


// console.log(arrCopy);


// arr.pop();


// console.log(arr);


// arrCopy = ['a','b','c'];  // new reference or memory address is created, now the both arr and arrCopy not refer to the same array


// console.log(arr);

// console.log(arrCopy)

// arr.push("e");

// console.log(arr);
// console.log(arrCopy)  // this array will not change , because we have created a new reference or address of this array previously


// constant array


// const arr = [1,2,3];


// arr.push(4);


// console.log(arr);  // it is possible to change the constant array elements



// arr = [1,2,3];// but assignment to constant variable not possible, means we cannot change the memory address of the array



// Nested Array

// nums = [[1,2], [2,3], [4,5], [5,6] ];
// rows = 3
// columns = 2

// nums[row][col]  to accessing the element

// practice question


// let nums = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']]  // we can also assign null with ' '


// nums[0][1] ='O';   // changing the value of first array , index 2
// console.log(nums);






















































