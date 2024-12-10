console.log("hello");
//let a= email;
const urlParams=new URLSearchParams(window.location.search);
const myData=urlParams.get('data');
console.log(decodeURIComponent(myData));