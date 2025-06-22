let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// Write replacer function to stringify everything, 
// but remove properties that reference meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  //solution
  return (key && value === meetup) ? undefined : value;
}));

