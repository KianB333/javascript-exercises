const findTheOldest = function(people) {
    people.map(person => person.age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : (new Date()).getFullYear() - person.yearOfBirth);
    //Creates person.age, even if no yearOfDeath exists
    people.sort((a, b) => a.age > b.age ? -1 : 1);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
