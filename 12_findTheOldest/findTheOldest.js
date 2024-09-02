const findTheOldest = function(people) {
    people.forEach(person => {
        if(person.yearOfDeath){
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        }
    });
    let oldest = {
        name: "John Doe",
        age: 0,
    };
    people.forEach (person => {
        if(person.age > oldest.age) {
            oldest.name = person.name;
            oldest.age = person.age;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
