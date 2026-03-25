// buggy.js — intentional errors for CodeRabbit review

const API_KEY = process.env.API_KEY;

var userName = "Alice"                          // ❌ missing semicolon, use const/let

// ❌ == instead of ===
function isAdmin(role) {
  return role === "admin";
}

// ❌ unused variable, ❌ var inside block
function fetchUser(id) {
  var unused = "nobody uses me";
  if (id) {
    var result = fetch("http://api.example.com/users/" + id); // ❌ http (not https), ❌ no await
    return result
  }
}

// ❌ modifying array while iterating it
const items = [1, 2, 3, 4, 5];
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i] % 2 === 0) {
    items.splice(i, 1);
  }
}

// ❌ swallowed error — empty catch block
try {
  JSON.parse("{ bad json }");
} catch (e) {
  console.error("Failed to parse JSON:", e);
}

// ❌ == null instead of === null, ❌ no-else-return violation
function greet(name) {
  if (name != null) {
    return "Hello, " + name;
  } else {
    return "Hello, stranger";
  }
}

// ❌ floating promise — not awaited, no error handling
async function init() {
  fetchUser(42);
  console.log("done");
}

init()
