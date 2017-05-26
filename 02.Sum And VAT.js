function solve(input) {
    let sum = 0;

    for( let i = 0 ; i < input.length; i++){
        sum += Number(input[i]);
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);


}

solve(['1.20', '2.60', '3.50'])
