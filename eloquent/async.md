# callbacks / setTimeout / promise / .then / async / await

## callback

- Waiting is not generally a very important type of work, but it can be useful when doing something like updating an animation or checking whether some-thing is taking longer than a given amount of time. Performing multiple asynchronous actions in a row using callbacks means that you have to keep passing new functions to handle the continuation of the computation after the actions.

### Example

- Using a callback function and waiting 2 seconds, while waiting we print something every 0.5 seconds to see the asynchronicity and the time.

```js
const posts = [
  { title: 'Post 1', body: 'something from post 1' },
  { title: 'Post 2', body: 'something from post 2' },
  { title: 'Post 3', body: 'something from post 3' },
]

// the time out simulates the fetching of something on the server
const getPosts = () => {
  setTimeout(() => {
    console.log(posts.reduce((out, post) => (out += post.title + '\n'), ''))
  }),
    1000
}

const createPostCallBack = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

for (let i = 500; i < 10000; i+= 500) {
  setTimeout(() => {
    console.log('waiting and you can do much more were, 0.5 second.....')
  }, i)
}

createPostCallBack({ title: '1', body: 'something' }, getPosts)
```

### Output

```console
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
Post 1
Post 2
Post 3
1

waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
waiting and you can do much more were, 0.5 second.....
```

------------

the use of debouncing and throttling :

- Throttling you go to a bar and the barman has a policy of only allowing you to order a drink every 45 minutes (Or things get crazy). You order a drink in the first minute and they hand one over. You then try and order one every minute after. The barman denies you until the 45th minute when the then tired barman hands over the next drink. You won’t get another drink for another 45 minutes. With throttling, you may want one last invocation to happen after the throttle is over. This will be one of the denied invocations. Imagine you order a drink in the 15th minute and get denied. In the 45th minute, you don’t order but the barman sends a waiter over with the drink from that 15th minute order.

- Debouncing works a little different. It can be a little harder to explain. With debouncing, it’s like “Hey, I’m not going to execute that function until I know there are no more changes inbound”. We don’t execute our function until everyone else is happy and we’re clear to proceed. Imagine ordering food at a restaurant. You start listing off items to the waiter/waitress and at the end they ask “Is that everything?” If it is, they leave you to it and go get your food and drinks. If it isn’t, you add to the order and then they ask you again until they are clear to proceed.
