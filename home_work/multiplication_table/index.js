let signleMultiplication = () => {
    let num = 99; //table of num 

    for (i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
let multiMultiplication = () => {
    for (i = 1; i <= 10; i++) {
        console.log('');
        for (j = 1; j <= 10; j++) {
            console.log(`${i} X ${j} = ${i * j}`)
        }
    }
}

// remove comments from below in oder to get output :

// signleMultiplication(); 
// multiMultiplication();