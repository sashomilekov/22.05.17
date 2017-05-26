function solve(input) {
    let number = Number(input);
    let result = '';

    for(let i = 1 ; i <= number; i++){
        result+= i;
    }

    console.log(result);
}

solve('11')