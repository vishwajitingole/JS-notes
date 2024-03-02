//sync main call stack
//async callback queue

//sabse pehle synchronous code chalega
//jab synchoronous code khatam ho jaye tab async chalega

//event loop keeps on checking whether the synchrous block is empty?

//Aisa koi bhi code jisse time lagta,js mein
//use by default in most cases async code maan kar side stack mein daal diya jta hai
//{settimeout} - kuch der baad chalta hai

// setTimeout(function () {
//   console.log("He3");
// }, 40000); //40 second baad ye chalega

//Kuch Situations aise bhi

// console.log("He1");
// console.log("He2");
// setTimeout(function () {
//   console.log("He3");
// }, 40000); //40 second baad ye chalega
// console.log("He4"); // ye set Time out ke liye nhi rukega

//{setinterval} - kuch der baad chalta hai with a particular interval of time

// setInterval(() => {
//   console.log("BHaago");
// });
//Ye infinitely chalega binna rukke binna thakke
// setInterval(() => {
//   console.log("BHaago");
// }, 1000);
//Ye Infinitely chalega 1 sec ke delay ke sath
// var count = 0;
// const waqt = setInterval(() => {
//   console.log("Bhaago");
//   count++;
//   if (count == 3) clearInterval(waqt);
// }, 1000);
//Ab bhaiya yaha bhagne wala hai toh rokne wala bhi chahiye wo kaam humara clear interval karega

//{fetch} - ye kisi url pe jaa ke kuch data laayega ya humse koi data leke jaayega

//Ab jab aadmi market mein jaayega sabji leke aayega iss mein definitely time toh lagega naa bhaiya
//iske liye apun cooking ke task hold karenge yaani ki await karenge
//hum tab tak cooking start nhi kar sakte jab tak humarein paas sabji naa aaye matlab haddd hai yaar
//sabji ke naam be masala thodi khaayenge

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

//{axios} - api se data lene ke liye  (external library)

//{promise} - iske andar jo bhi code hoga wo run hoga aur wo khud side stack mein chala jaayega uss code ko lekar
//aur jab ye code resolve hoga tab ye code chalega

//ye sabhi tab use kiye jaate hai tab aapko kuch aisa karna ho jismein kuch time lagega
