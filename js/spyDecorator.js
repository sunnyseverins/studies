// Create a decorator spy(func) that should return a wrapper
// that saves all calls to function in its 'calls' property

function work (a, b) {
  return a + b;
}

work = spy(work);

work(1, 2);
work(3, 4);

for (let args of work.class) {
  console.log('call: ' + args.join() );
}

// solution

function spy(func) {
  function wrapper(...args) {
    wrapper.class.push([...args]);
    return func.apply(this, args);
  }
  wrapper.class = [];;
  return wrapper;
}