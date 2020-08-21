let name = prompt("Как тебя зовут?");
let age = +prompt("Cколько тебе лет?");
let isAlco = confirm("Алкоголь употребляем?");

if (Number.isNaN(age)) {
  alert(name + ", " + "неправильно ввели возраст");
} else if (age > 40 && isAlco === true) {
  alert(name + ", " + "не злоупотребляйте");
} else if (age < 18 && isAlco === true) {
  alert(name + ", " + "ты что?! Маме расскажу!");
} else if (18 > age < 40 && isAlco === true) {
  alert(name + ", " + "только водку с пивом не мешай...");
} else if (isAlco === false) {
  alert(name + ", " + "так держать!");
}
