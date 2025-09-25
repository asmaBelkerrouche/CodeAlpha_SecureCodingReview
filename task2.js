// login.js - simple login
const users = [
    { username: "admin", password: "adminadmin123" } // hardcoded password
];

function login(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return "Login successful!";
        }
    }
    return "Login failed!";
}

// unsafe input handling
function postComment(comment) {
    document.getElementById("comments").innerHTML += comment;
}
