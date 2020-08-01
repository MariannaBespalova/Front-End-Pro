let name = prompt ("Как тебя зовут?");
let yearBirth = prompt ("Какого ты года рождения?");
let currentTime = new Date();
let year = currentTime.getFullYear();
let age = year - +yearBirth;


if ( Number.isNaN(age)) {
    alert (name + ", " + "неправильно введен год рождения");
} else {
    alert (name + " " +  age); 
} 
  
