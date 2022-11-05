/*const arr=[1,2,3,4,5,6,4,2,8,10,8,7,6];
max=arr;
max.sort(function(a,b){return a-b});
console.log("arr[arr.length -1]");
for(var i= 0; i<= arr.length-1; i++){
 if(arr[index]<arr[index+1] && arr[index]>arr[index+1)
    {
       console.log("i");*/
   // }
   // console.log("large");
    //console.log(i, "value of index");
    //console.log(arr[i],"Printing the number");
    
    

//}
/*const arr=[1,2,3,4,5,6,4,2,8,10,8,7,6];
while(arr[index]<=arr[index+1])
{
    console.log("arr");
    arr++;
}*/
/*const arr=[1,2,3,4,5,6,4,2,8,10,8,7,6];
function largest(arr)
{
let max=arr[0];
for(var i=0;i<arr.length;i++)
{
    if(arr[i]>max)

    max=arr[i];
    //console.log(arr[i]);
}
return max;
//console.log(arr[i]);
}

console.log(largest(arr));*/


/*const arr=[1,2,3,5,10,30,47,50]

for(var i=0;i<arr.length;i++)
{
    if(arr[i]%5==0)
    {
        console.log(i,"arr has no divisible by 5");
    }else
    {
        console.log(i, "arrar does not have any no divisible by 5");
    }

    
}*/
/*const arr=[1,2,3,5,10,30,47,50]
let even=0;
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {

    }

}*/

/*const arr=[1,2,3,4,5,6,7];
var i=0;

while(i<=arr.length)
{
    console.log(arr[i]);
    i++;

}*/
/*const a={1:2,3:4,5:11,7:9};
console.log(Object.keys(a));
let max=0;
for(var i=0;i<Object.keys(a);i++){
    if(max<Object.key){
        
    }
    console.log(a);
}*/


/*function divisible(a)
{ a=8;
    if(8/2)
    {
        console.log("true");

    }
    else
    {
       console.log( "number is not divisible by 2");

    }
}
divisible(8);*/

/*const arrowfun= (array)=>{
    array=[1,2,3,,4,5,];
    //return array;
}
//return array;

arrowfun(array);*/
/*const  arr=[{x:1,y:2},{x:3,y:4},{x:5,y:6},{x:7,y:8},{x:9,y:10}];
const result=arr.map((element)=>{
    for(var i=0;i<=arr.length;i++)
    {
        return Object.x;
    }

    
}
)
console.log(return,"find x vallue");*/
/*const arr=[1,2,3,4,6,2,3,4,4,2];
arr.forEach(function(element){
    
})
const result=arr.map((x,y)=>
{

}
)*/
//const N=5;
//************************************************************************************************888 */
//PROBLEM-1;
/*var num = 0;
if(num==0)
{
    console.log("The factorial value will be=1");

}
else if(num<0)
{
    console.log("Invalid Number");
}
else
{
var fact = 1;
for(var i=1;i<=num;i++)
{
    fact*=i;
}
console.log("The factorial value will be =",fact);
}*/
//********************************************************************************** */
//PROBLEM-2
/*var num=2;
let N;
if(num<0){
    console.log("The number is negivate");
}
else
{
    N=num*num*num;

}
console.log( N);*/
//***************************************************************************************************8 */
//PROBLEM-3
/*var a=20;
let area;
{
    area=(1.732*a*a)/4;

}
console.log(area);*/

//********************************************************************************8 */
//Problem-4
/*var num=2;
let i=5;
for( i=1;i<=12;i++){
    if(i==2)
    {
        console.log(28);
    }
    if ( i%2==0 ){
    
        console.log(31);
    }
    
    else

    {
        console.log(30);
    }
    
    //console.log(x);

}*/
//***************************************************************************************** */
//var num=13;
/*var a=12;
let num=18;
if(a<num)
{
    console.log("not valid range");
}
else if(num%2)
{
    console.log(30);
}
else
{
    console.log(31);
}*/

//**************************************************************************************8 */

//promlem -6

//const number = prompt("Enter a positive integer: ","20");
/*const number=10;
let sum = 0;
//console.log("number");
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log( sum);*/

//******************************************************************************** */



//problem -12
/*let value=5;
 const revVlaue=() =>
 {
    let myRevVal = value.toString().split("").reverse().join("");
    console.log(myRevVal);

 }
 revVlaue();*/
 

//******************************************************************** */


 //Problem-8
 /*let a="Lorem Ipsum";
 
 //console.log(a);
 
 console.log(a.replace(/\s/g,'').length);*/
 //**************************************************************************************** */

 

//******************************************************************************************* */


//problem-15
 /*function postfixEval(string) {

    var stack = [];
    var ch; 
  
    for (var k = 0, length = string.length; k < length;  k++) {
  
      ch = string[k];
  
      
      if (/\d/.test(ch))
        stack.push(ch);
  
      
      else if (ch in operators) {
  
        var b = +stack.pop();
        var a = +stack.pop();
  
        var value = operators[ch](a, b);
        stack.push(value);
  
      }
  
      
  
    }
  
    if (stack.length > 1)
      throw "ParseError: " + string + ", stack: " + stack;
  
    return stack[0];
  
  }
  
  
  var operators = {
    "+": function (a, b) { return a + b },
    "-": function (a, b) { return a - b },
    "*": function (a, b) { return a * b },
    "/": function (a, b) { return a / b }
  };
  
  
  
  console.log(postfixEval("5 3 1 \* + 9 -")); */

//************************************************************************************* */

//problem-7
  /*function nthTerm(num){
  
    let term
    term = num*num
    console.log(term)
  }
  nthTerm(18)*/
//*************************************************************************************************** */

  //problem-4
  /*function monthDays(n) {
    if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10) {
  
      return 31;
    }
    else if (n == 4 || n == 6 || n == 9 || n == 11) {
  
  
  
      return 30;
    }
    else if (n == 2) {
      return 28;
  
    }
    else {
      return "Error";
    }
  }
  n = 8;
  answer = monthDays(n);
  console.log(answer);*/

//***************************************************************************** */


  //problem-13

/*function nthTerm(n){
    return n*n-n;
}
let n=5;
n=n+1;
console.log(nthTerm(n));*/

//************************************************************************************* */

//problem--14
/*function rotleft(arr,rotations){
    const rotatedArray = arr.concat();
    for (let i =0; i < rotations;i++){
        const frontItem= rotatedArray.shift();
        rotatedArray.push(frontItem);
    }
    return rotatedArray;
}
const numRotation=3;
const sampleArray = [1,2,3,4,5,6,7];

console.log(rotleft(sampleArray,numRotation));*/

//********************************************************************************************* */


//problem-5
/*const celsius=12;
let fahrenheit;
fahrenheit=celsius * 9/5 +32;
console.log(fahrenheit);*/

//or

/*function convertToF(celsius){
    var fahrenheit;
    fahrenheit=celsius * 9/5 +32;
    return fahrenheit;

}
convertToF(55);*/

//*************************************************************************************8 */
//problem-9;

/*const a=1;
const b=5;
const c=6;
let x;
x =Math.sqrt(b*b-4*a*c);
let y;
y=2*a;
var root1=(-b + x)/y;
var root2=(-b - x)/y;

//console.log(x); 
console.log(root1);
console.log(root2);
//z= (a*root1*root1 + b*root1 +c);

//a=a*root1*root1;
//b=b*root1;
//c=c;
//console.log(z);
//console.log(b);
//console.log(c);*/
      
 //final code 
    
/*const a=1;
const b=5;
const c=6;
let x;
x =Math.sqrt(b*b-4*a*c);
let y;
y=2*a;
var root1=(-b + x)/y;
var root2=(-b - x)/y;
console.log(root1);
console.log(root2);*/

//*********************************************************************************** */
    
//problem-11
/*const arr=[3,3,4,4,7,8];
for(var i=10; i>=arr.length;i--){
    if(arr.indexOf==arr.indexOf+1){
        
    }
    console.log(i);

}*/


/*const A=1;
const b=5;
const c=6;
let x;
x =Math.sqrt(b*b-4*A*c);
let y;
y=2*A;
var root1=(-b + x)/y;
var root2=(-b - x)/y;
console.log(root1.toFixed(2));
console.log(root2.toFixed(2));*/



/*function sortByFreq(arr, n) {
  
  var maxE = -1;

  for (var i = 0; i < n; i++) {
    maxE = Math.max(maxE, arr[i]);
  }

  var freq = new Array(maxE + 1).fill(0);

  for (var i = 0; i < n; i++) {
    freq[arr[i]]++;
  }
  var cnt = 0;

  for (var i = 0; i <= maxE; i++) {
    
    if (freq[i] > 0) {
      var value = 100000 - i;
      arr[cnt] = 100000 * freq[i] + value;
      cnt++;
    }
  }

  
  return cnt;
}


function printSortedArray(arr, cnt) {
  
  for (var i = 0; i < cnt; i++) {
    
    var frequency = parseInt(arr[i] / 100000);

    
    var value = 100000 - (arr[i] % 100000);

    
    for (var j = 0; j < frequency; j++) {
     console.log(value + " ");
    }
  }
}

var arr = [3,3,4,4,7,8];


var n = arr.length;
var cnt = sortByFreq(arr, n);

arr.sort((a, b) => b+a);

printSortedArray(arr, cnt);*/


  












/*function sortArray(array) {
  let oddNums = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      oddNums.push(array[i]);
    }
  }
  oddNums = oddNums.sort((a,b)=> a-b);
  array.concat(oddNums);
  array = array.sort((a,b) => a-b);
  return array;
}
let array = [5,3,9,1,44,6];
console.log(sortArray[array]);*/


/*const a=5;
if(a===1){
  console.log( "1 is not a prime no or non prime no");

}
else(a > 1)
  for(var i=2;i<a;i++) 
  {
    if (i%2==0) {
      
      console.log( "number is prime ");

    }
  }*/

  /*var num = 5;
  if(num==0)
  {
      console.log("The factorial value will be=1");
  
  }
  else if(num<0)
  {
      console.log("Invalid Number");
  }
  else
  {
  var fact = 1;
  for(var i=1;i<=num;i++)
  {
      fact*=i;
  }
  console.log(fact);
  }*/



  /*const number=10;
let sum = 0;
//console.log("number");
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log( sum);*/




/*function nthTerm(num){
  
  let term
  term = num*num
  console.log(term)
}
nthTerm(18)*/








/*function monthDays(n) {
  if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10) {

    return 31;
  }
  else if (n == 4 || n == 6 || n == 9 || n == 11) {



    return 30;
  }
  else if (n == 2) {
    return 28;

  }
  else {
    return "Error";
  }
}
n = 8;
answer = monthDays(n);
console.log(answer);*/

/*function rotleft(arr,rotations){
  const rotatedArray = arr.concat();
  for (let i =0; i < rotations;i++){
      const frontItem= rotatedArray.shift();
      rotatedArray.push(frontItem);
  }
  return rotatedArray;
}
const numRotation=3;
const sampleArray = [1,2,3,4,5,6,7];

console.log(rotleft(sampleArray,numRotation));*/


/*function nthTerm(n){
  return n*n-n;
}
let n=5;
n=n+1;
console.log(nthTerm(n));*/
/*var num = 5;
if(num==0)
{
    console.log("The factorial value will be=1");

}
else if(num<0)
{
    console.log("Invalid Number");
}
else
{
var fact = 1;
for(var i=1;i<=num;i++)
{
    fact*=i;
}
console.log(fact);
}*/



/*function nthTerm(num){
  
  let term
  term = num*num
  console.log(term)
}
nthTerm(18)*/


/*const number=10;
let sum = 0;
//console.log("number");
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log( sum);*/


