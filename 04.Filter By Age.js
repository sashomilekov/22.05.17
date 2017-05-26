function  solve(minAge, firstName , ageOfFirstName, secondName, ageOfSecondName) {

    let firstPerson = {name:firstName, age:ageOfFirstName};
    let secondPerson = {name:secondName, age:ageOfSecondName};

    if(firstPerson.age >= minAge){
        console.log(firstPerson);

    }
    if(secondPerson.age >= minAge){
        console.log(secondPerson);
    }
}
solve(12, 'Ivan', 15, 'Asen', 9);