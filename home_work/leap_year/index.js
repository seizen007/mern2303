let year = prompt("Enter a Year");
year = Number(year);
if (Number.isInteger(+year) && year > 0) {
    (year % 4 == 0 && year % 100 != 0 || year % 400 === 0) ? console.log(`${year} is leap year`) : console.log(`${year} is not leap year`);
} else {
    console.log("input a valid year");
}