let persons=[
    {name: "MONCEF", age: 13},
    {name: "BAHIJA", age: 23},
    {name: "ALA", age: 18},
];
let personsMineurMajeur=persons.map(function MineurMajeur(person){
    if (person.age>=18){
        person.status="majeur";
        
    }else{
        person.status="mineur";
    }
    return person;
    
});
console.log(personsMineurMajeur);