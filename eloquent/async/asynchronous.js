/**
 * asynchronous programming in js
 */

// usage of example posts
const posts = [
  { title: 'Post 1', body: 'something from post 1' },
  { title: 'Post 2', body: 'something from post 2' },
  { title: 'Post 3', body: 'something from post 3' },
]
// the time out simulates the fetching of something on the server
const getPosts = () => {
  setTimeout(
    () =>
      (document.body.innerHTML = posts.reduce(
        (out, post) => (out += `<li>${post.title}</li>`),
        ''
      )),
    1000
  )
}

// getPosts()

/**-------------------------------------------------------------------------
 * **callback** examples
 * so using callback, the function must take a callback function so that
 * it can execute the function went the process finishes
 */

const createPostCallBack = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

// this will take 3 seconds to finish because the callback function takes
// 1 second and the createPostCallBack takes 2 seconds
createPostCallBack(
  { title: 'Post 4 using callback', body: 'something from post 4' },
  getPosts
)

/**-------------------------------------------------------------------------
 * using **Promises** example
 * A promise presents the resolve and reject function, you can take a look in the example
 * the Promises example will have the `.then` and the usage of the `.all`
 * for all the promises that are created
 */

// imagin if the error value is a sine of any error, false no error true error
const createPostPromise = (post) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      let error = false
      if (!error) resolve()
      else reject('ERROR: enable to create post, some error ocurred')
    }, 2000)
  })

createPostPromise({
  title: 'Post 4 using promises',
  body: 'something from post 4',
}).then(getPosts)

// taking care of the error ↓ try putting the error = true
createPostPromise({
  title: 'Post 4 using promises error handling',
  body: 'something from post 4',
}).then(getPosts)
//  .catch((err) => console.log(err))

/**-------------------------------------------------------------------------
 * using **Promise.all** example
 * Promise.all takes as parameter an array so that it can take care of tall the
 * promises. One problem is that it takes care of all the promises at once so that may override the server or the cpu
 * one way to fix that is to create workers for it
 */

// create allot of promises and call them all
const promise = Promise.resolve('hello world')
const promise1 = 10
const promise2 = new Promise((resolve, _) =>
  setTimeout(resolve, 2000, 'bye bye')
)
// lets fetch some information from the hacker-news API and log in on the console
const promise3 = fetch(
  'https://api.hnpwa.com/v0/news/1.json'
).then((response) => response.json())

// you can se the output on the browser console
Promise.all([promise, promise1, promise2, promise3]).then((v) => console.log(v))
//  .cath((e) => console.log(e))

/**-------------------------------------------------------------------------
 * Async / Await
 * async and await is another way to handle promises without the use of
 * then and catch
 * maybe the best way to handle promises
 */

// to use await it must be in a async function
const init = async () => {
  // so we await until the createPostPromise is done then we call the getPosts function
  await createPostPromise({
    title: 'Post 4 using promise and async functions',
    body: 'something from post 4',
  })
  getPosts()
}

init()

/**-------------------------------------------------------------------------
 * Async / Await / fetch
 * async and await is another way to handle promises without the use of
 * then and catch
 * maybe the best way to handle promises
 */

const fetchUser = async () => {
  // without the __await__ it will be a pending promise
  const response = await fetch('https://api.hnpwa.com/v0/show/1.json')

  // if you do something like await fetch('https://api.hnpwa.com/v0/show/1.json').json()
  // it doest working because its a promise you will need to call **.then(r => r.json())**
  // or just USE await to be more clean and better!!!

  // same thing were, if you dont use await it will return a pending promise
  const data = await response.json()
  console.log(data)
}

fetchUser()
