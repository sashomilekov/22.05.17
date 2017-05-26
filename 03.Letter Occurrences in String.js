function solve(string , letter) {



    let counter = 0;

    for(let i = 0; i < string.length; i++ ){

        if(string[i] === letter){
            counter++;
        }
    }
    console.log(counter);

}

solve('hello', 'l');