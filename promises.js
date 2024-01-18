//promises are one of the most important topics in node js.
//promises are used to make it readable of asynchronous code

//types of promises 
/*
1.pending.
2.fulfilled.
3.rejected.
*/

//in first process the asynchronous process is ongoing.
//in second process when it completes the asynchronous operation.
//in third process is when an asynchronous operation failed.
/*
const { error } = require('console');
const fs = require('fs') //importing the fs module to create a promise that reads file.

const readFilePromise = (filepath,filetext)=>{
   //`here we created the function readFilePromise that returns a promise.`
   return new Promise((resolve,reject)=>{
    //asynchronously read the file
    fs.readFile(filepath,"utf-8",(error,data)=>{
      if(error){
        reject(error);
      }else{
        resolve(data);
      }
    });
   }); 
};

const filepath = 'ex.txt';

readFilePromise(filepath)
      .then((content)=>{
        console.log("file content: ", content);
      })
      .catch((error)=>{
        console.log("error: ",error);
      })

const filetext = 'ex1.txt';
readFilePromise(filetext)
      .then((content)=>{
        console.log("file content: ", content);
      })
      .catch((error)=>{
        console.log("error",error);
      })

const myFirstPromise = ()=>{
  return new promise((reject,resolve)=>{
    //here we need to perform any asynchronous operation 
    //to that async op we need to give callback as this if-else
    if(error){
      reject(error);
    }
    else{
      resolve(data);
    }
  });
};
//the total output is depends upon the above result.
myFirstPromise()
      .then((content)=>{
        console.log("the data has been retrieved! ");
      })
      .catch((error)=>{
        console.log("an error has been occured");
      })*/


