const add = (a,b) =>{
    return a+b;
};



module.exports = add;


/*
-> module exports is used to export the module to the main file.
-> first we need to perform the require method.
-> The advantage of this is that we can use the function as many times we need.
*/

/*
->before modules code executed it wrapped with iife(immediately invoked function expression)
->no need to worry about the conflict variables.
*/