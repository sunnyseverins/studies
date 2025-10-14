function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
 }
 let user = {
  name: 'John',
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// TASK:
// Fix the line below to properly see 'user.name' in answers

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));