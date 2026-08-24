// // console.log("Hello, World!");

// function sum(a, b) {
//     return a * a + b * b;
// }
// console.log(sum(23, 30));

// let a=34;
// if(a>20){
//     let a=45;
//     console.log("a inside a="+a);

// }
// console.log("a outside a="+a);

// const sum=function(a,b){
//     return a+b;
// }
// console.log(sum(23,30));

// const sum=(a,b)=>{return Math.sqrt(a+b)};
// console.log(sum(40,50));

// IIFE
// (()=>{console.log("Hello")})();

// call back function


// //console.log("Hello, World!");
// // console.log("Hello, World!");
// // function sum(a, b) {
// //     return a + b;
// // }
// // sum(5, 10);
// // console.log(sum(5, 10));
// // // square root of sum
// // console.log(Math.sqrt(sum(5, 10)));

// let a = 34;
// if (a > 20) {
//   let a = 45;
//   console.log("a inside a=" + a);
// }
// console.log("a outside a=" + a);
// const sum = function (a, b) {
//   return a + b;
// // }
// sum(23, 30);
// const sum = (a, b) => {
//   return Math.sqrt(a + b);
// };

// console.log(sum(40, 90));
//Callback function
// function sum(a,b) {
//   return a + b;
// }
// function sumWithMsg(clbk,msg){
//   const result = clbk(10,20);
//   console.log("Hiii"+ msg + result);
// }
// sumWithMsg(sum,"SID ");
// function login(msg,error){
//   if(error){
//     console.log(error);
//   }
//   else {
//     console.log(msg);
//   }

// }
// function loginHandler(username,password,clbk  ){
//   // username="sid";
//   // password="123";
//   if(username=="sid" && password=="123"){
//                clbk("Login Success",null);
//   }
//   else {
//     clbk(null,"username or password is incorrect");
//   }
// }
// loginHandler("sid", "124", login);
// setTimeout(() => {
//   console.log("One");
//   setTimeout(() => {
//     console.log("Two");
//     setTimeout(() => {
//       console.log("Three");
//       setTimeout(() => {
//         console.log("Four");
//         setTimeout(() => {
//           console.log("Five");
//           setTimeout(() => {
//             console.log("Six");
//           }   setTimeout(() => {
//             console.log("Seven");

//           }
//         }
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//promises
const myPromise = new Promise((resolve, reject) => {
  let username = "sid";
  let password = "123";

  if (username === "sid" && password === "123") {
    resolve("Login Success");
  } else {
    reject("Invalid Credentials");
  }
});

async function orderReceived() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Received");
    }, 1000);
  });
}

async function orderPrepared() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Prepared");
    }, 1000);
  });
}

function orderHandOver() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Handed Over");
    }, 1000);
  });
}

function orderCompleted() {
  console.log("Order Successfully Completed");
}
function otp() {
  return Math.floor(Math.random() * 10000);
}


async function handleLogin() {
  try {
    const status = await myPromise;
    console.log(status);

    const orderStatus = await orderReceived();
    console.log(orderStatus);

    const orderStatus2 = await orderPrepared();
    console.log(orderStatus2);

    const orderStatus3 = await orderHandOver();
    console.log(orderStatus3);
    const generatedOtp = otp();
    console.log("Generated OTP:", generatedOtp);
    const enteredOtp = 1234;
    if (enteredOtp === generatedOtp) {
      console.log("OTP Verified ");
      orderCompleted();
    } else {
      console.log("Invalid OTP ");
    }
  } catch (error) {
    console.log(error);
  }
}
handleLogin();