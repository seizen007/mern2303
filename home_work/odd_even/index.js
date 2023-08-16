// odd and even 
let trash = `invalid values such as "aAcD@%#"`;
let num = prompt("enter a number");
let range = prompt("enter a range");

if (Number.isInteger(+num) && Number.isInteger(+range)) {
    for (let i = num; i <= range; i++) {
        if (num !== '') {
            (i % 2 == 0) ? console.log(`${i} is an even number`) : console.log(`${i} is an odd number`);
        }
        else {
            console.log("you have submitted an empty value");
            break;
        }
    }
} else {
    console.log(`${trash}`);
}