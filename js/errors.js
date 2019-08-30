//the error cretes an error objecet
//Instances of error objects are thrown when runtime errors occur

//syntax:
//new Error([message[, fileName[, lineNumber]]])

 // the massage as to be human readable :) error
 // the filename says all, by default it's the name of the file containing the code
 //ex:

 const callError = Error('using the function call')

 const newError = new Error('using the new key word')
 
 console.log('-> ', newError,'\n', callError)

 //their are other errors types ....