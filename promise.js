// const firstFunct = function(){
//   console.log("oven started")
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve("oven preheated")
//     }, 5000)
//   })
// }

// console.log("a")
// firstFunct()
// .then(data => console.log(data))
// console.log("b")

done = true

const firstFunct = function(){
  return new Promise(function(resolve, reject){
    if (done){
      resolve("ASYNC JS is ...")
    }else{
      reject("Promise failed")
    }
  })
}

const secondFunct = function(data){
  return new Promise(function(resolve, reject){
    resolve(data+"very useful but confusing at first!")
  })
}

function amazingFunct(){
  return "This function is doing a lot of cool stuff!"
}


// firstFunct()
// .then(data => secondFunct(data))
// .then(console.log)
// .catch(err => console.log(err))

// async function myRequest(){
//   const result = await firstFunct()
//   const fullMessage = await secondFunct(result)
//   console.log(fullMessage)
// }

// myRequest()
