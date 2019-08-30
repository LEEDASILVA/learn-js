//the async function defins a asynchronous function that operates via the event loop.
// (so a multithreading function it runs and waits untill it returns ta Promise)

function after2seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function adding1(x) {
    var a = after2seconds(20);
    var b = after2seconds(30);
    return x + await a + await b;
  }
  
  adding1(10).then(v => {
    console.log(v);  // exibe 60 depois de 2 segundos.
  });
  
  async function adding2(x) {
    var a = await after2seconds(20);
    var b = await after2seconds(30);
    return x + a + b;
  }
  
  adding2(10).then(v => {
    console.log(v);  // exibe 60 depois de 4 segundos.
  });

  //what's a Promise?   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  //Promise is an object representing the eventual completion or failure of an asynchronous operation.

  //Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

  //Imagine a function, createAudioFileAsync(),
  //which asynchronously generates a sound file given a configuration record and two callback functions,
  // one called if the audio file is successfully created, and the other called if an error occurs.


  //the Promise as 3 states : pending, fulfilled or rejected
  //https://mdn.mozillademos.org/files/15911/promises.png

  function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
  }
  
  function failureCallback(error) {
    console.log("Error generating audio file: " + error);
  }

  //
  createAudioFileAsync(audioSettings, successCallback, failureCallback);
  //using promise you can attach your callback to instead:
  createAudioFileAsync(adudioSettings).then(successCallback, failureCallback);
  //or 
  const promise = createAudioFileAsync(audioSettings); 
  promise.then(successCallback, failureCallback);



  //othe examples

  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise1);
  // expected output: [object Promise]

  //awiat -> operator is used to wait for a Promise. It can only be used inside an async function
  //The await expression causes async function execution to pause until a Promise is settled,
  //that is fulfilled or rejected, and to resume execution of the async function after fulfillment.
  //When resumed, the value of the await expression is that of the fulfilled Promise.