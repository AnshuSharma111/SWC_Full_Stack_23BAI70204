// simple callback example
console.log("Simple callback example:");

function getUserData(userId, callback) {
    setTimeout(() => {
        console.log("1. Fetched user data");
        callback({id : userId, name : "Alice"});
    }, 1000);
}

getUserData(101, (user) => {
    console.log("User bject received: ", user);
});

// example of callback hell
console.log("Example of callback hell:");
function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("2. Fetched user posts");
        callback(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
}

getUserData(101, (user) => {
    console.log("User object received: ", user);
    getUserPosts(user.id, (posts) => {
        console.log("User posts received: ", posts);
    });
});

// weird callback behavior : Closure
console.log("Counter example with closure:");
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();

counter();
counter();