//call apply bind
//THree ways to call a function karne ke kisi object ko this maan kar

//Call
// const obj = {
//   name: "Vishwajit",
// };
// function abcd() {
//   console.log(this);
// }
// abcd.call(obj); //{name: 'Vishwajit'}
// abcd.call("30"); //String {'30'}
// abcd.call(90); //Number {90}

//Apply
// const obj = {
//   name: "Vishwajit",
// };
// function abcd(a, b, c, d) {
//   console.log(this, a, b, c, d);
// }
// abcd.apply(obj, [1, 2, 3, 4]); //{name: 'Vishwajit'} 1 2 3 4

//Bind:- ye function ko chalata nhi hai
//It will create a function which you could use it afterwards
// const obj = {
//   name: "Vishwajit",
// };
// function abcd(a, b, c, d) {
//   console.log(this, a, b, c, d);
// }
// const baadmeinrunhoga = abcd.bind(obj);
// baadmeinrunhoga(); // undefined undefined undefined undefined
