// switch starts here 
let trash = `invalid values such as "aAcD@%#*^$+"`;
let day = prompt("Enter week number between 1-7");
day = Number(day);
let weekday = ["Monday","Tuesday"];
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";

if (Number.isInteger(+day) && day >= 0) {

    switch (day) {
        case 0:
            console.log("empty value");
            break;
        case 1:
            console.log("Today is " + weekday[0]);
            break;
        case 2:
            console.log("Today is " + weekday[1]);
            break;
        case 3:
            console.log("Today is " + weekday[2]);
            break;
        case 4:
            console.log("Today is " + weekday[3]);
            break;
        case 5:
            console.log("Today is " + weekday[4]);
            break;
        case 6:
            console.log("Today is " + weekday[5]);
            break;
        case 7:
            console.log("Today is " + weekday[6]);
            break;
        default:
            console.log("you have submitted a number which is bigger than 7");
            break;
    }
}
else if (day < 0) {
    console.log("you have submitted a negative number");
}
else {
    console.log(`${trash}`);
}
