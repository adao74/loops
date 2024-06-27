let x = 1;

do {
    console.log(x);
    x++;
} while ( x >=1 && x <= 1000 )

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1992",
    gender: "female"
}

const person2 = {
    firstName: "Andrea",
    lastName: "Yolo",
    birthDate: "Mar 5, 1927",
    gender: "female"
}

const person3 = {
    firstName: "Hehe",
    lastName: "Yo",
    birthDate: "Mar 5, 1929",
    gender: "male"
}
  
console.log(Object.keys(person));  // ['firstName', 'lastName', 'birthDate', 'gender']

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }

// Expected output:
// "firstName: Jane"
// "lastName: "Doe"
// "birthDate: Jan 5, 1925"
// "gender: female"

const arrayOfPersons = [person, person2, person3]

console.log(arrayOfPersons)

const birthDate = (arr) => {
    for (let person of arr) {
        const last = person.birthDate.length - 1;

        if (parseInt(person.birthDate.charAt(last))%2 === 1) {
            console.log(person.birthDate)
        }
    }
}

birthDate(arrayOfPersons)

arrayOfPersons.map( value => console.log(value) )

for (let value of arrayOfPersons.filter( value => value.gender == "male")) {
    console.log(value)
}


// START HERE
const earlyBirth = (obj) => {

    if (parseInt(obj.birthDate.substring(-1, -4)) < 1990) {
        return true
    }
}

const oldPeople = arrayOfPersons.filter( value => earlyBirth(value)) // if earlyBirth(value) returns true, include in new array

for (let person of oldPeople) {
    console.log(`this is ${person}`)
}




