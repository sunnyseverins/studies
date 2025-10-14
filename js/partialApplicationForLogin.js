function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

// TASK:
// Finish the function below for the proper execution

askPassword(
  user.login.bind(user, true),
  // two ways to solve
  () => { user.login(false) }
);