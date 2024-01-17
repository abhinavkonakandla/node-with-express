//promises are one of the most important topics in node js.
//promises are used to make it readable of asynchronous code

//types of promises 
/*
1.pending.
2.fulfilled.
3.rejected.
*/

const fs = require('fs');

// Create a Promise to read a file
const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    // Asynchronously read the file
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        // Reject the Promise if there is an error
        reject(error);
      } else {
        // Resolve the Promise with the file content
        resolve(data);
      }
    });
  });
};

// Usage of the Promise
const filePath = 'example.txt';

readFilePromise(filePath)
  .then((content) => {
    console.log('File content:', content);
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });