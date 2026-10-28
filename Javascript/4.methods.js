// Methods: Action that can be performed on objects.

// format stringName.method()

// trim() method => used to trim spaces from last and end from an string.


// let str = "   Hello   ";

// console.log(str);

// console.log(str.trim());  // 

// let str1 = "  Hel   lo  "

// console.log(str1);
// console.log(str1.trim());  // it does not trim spaces in between

//   STRINGS ARE IMMUTABLE IN JAVA , ITs varialbe can only be updated if assign a new value using let keyword

// let password = prompt("Enter your password");

// let newPass = password.trim();   // whenever we trim any string by this method , it creates a new string with changes, not update the string.if you print previous string, then the changes will not reflect

// console.log(newPass);   


// strings are immutable in javascript , whenever we do try to change the string a new string is created and old one remains same.


// let str = "   apna    ";

// let newStr = str.trim();

// console.log(newStr);   // only changes can be made if I change the whole value of variable , else the string remain same



// lower and upper case


// let str = "apna college";

// console.log(str.toUpperCase());


// let str1 = " YOUR ARE GOOD";

// console.log(str1.toLowerCase());



// Argument is some value that we passed to the method 


// IndexOf  => Return the first index of occurence of some value in a string . or give -1 if not found


// let str = "IloveCoding";

// console.log(str.indexOf("I"));
// console.log(str.indexOf("J")); // not found , ont in a string

// console.log(str.indexOf("love"));
// console.log(str.indexOf("Coding"));
// console.log(str.indexOf("o"));  // return 2, of first occurence



// Method chaining


// let str = "   Hello   ";

// let newStr = str.trim();

// console.log("After trim: ", newStr);

// newStr = newStr.toUpperCase();

// console.log("After uppercase:", newStr);


// let  newStr = str.trim().toUpperCase();

// console.log(newStr);


// slice method


// let msg = "hello";

// console.log(msg.slice(0,4));


// let msg = "apnacollege";

// console.log(msg.slice(0));// print the whole string from starting 0 to end

// let name = "aditya";

// console.log(name.slice(0,name.length));


// let college = 'lovely';

// console.log(college.slice(1,5)); // start to end - 1
// console.log(college.slice(1,college.length - 1));


// let message = "apnaschool";

// console.log(message.slice(-1));   // length = 10 - 1 = index 9, it will print length - 1 index

// console.log(message.slice(-3));


// replace=> searches a value in the string & return a new string with the value replaced

// let msg = "IloveCoding";

// console.log(msg.replace("love","do"));

// console.log(msg.replace("o","x"));


// let message = "IloveCodingCoding";

// console.log(message.replace("Coding","Singing"));  // replace only first occurence 

// console.log(message);


// repeat method


// let fruit = "mango";

// console.log(fruit.repeat(3));
// console.log(fruit.repeat(2));


// practice question



// let msg = "help!";

// console.log(msg.trim().toUpperCase());


// let name = "ApnaCollege";

// console.log(name.slice(4,9));


// console.log(name.indexOf("na"));

// console.log(name.replace("Apna", "Our"));

// let msg = name.slice(4).replace("l","t").replace("l","t");  // method chaining


// console.log(msg);











