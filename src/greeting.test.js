const greeting = require('./greeting')
const expect = require("expect");

test('works', () => {
    expect(greeting()).toBe("Hello");
});

function fizzBuzz(n){
    if(n % 5 == 0 && n % 3 == 0)
        return "fizzBuzz"
    else if(n % 5 == 0)
        return "buzz"
    else if(n % 3 == 0)
        return "fizz"
    else
        return n
}
function contains(n){
    if(n % 10 == 3 || n / 10 == 3 )
        return "fizz"
    else if (n % 10 == 5 || n / 10 == 5 )
        return "buzz"
}
/*function printList(){
        for(let i = 1; i <= 100; i++){
            return fizzBuzz(i)+contains(i)
    }  
}*/

for(let i = 1; i <= 100; i++){
    fizzBuzz(i)
    contains(i)
    console.log(fizzBuzz(i))
    console.log(contains(i))
}

test('con 1 imprime 1', ()=>{
    expect(fizzBuzz(1)).toBe(1);
})

test('con 3 imprime fizz', ()=>{
    expect(fizzBuzz(3)).toBe("fizz");
})

test('con 5 imprime buzz', ()=>{
    expect(fizzBuzz(5)).toBe("buzz");
})

test('con 15 imprime fizzBuzz', ()=>{
    expect(fizzBuzz(15)).toBe("fizzBuzz");
})

test('contiene 3 e imprime fizz', ()=>{
    expect(contains(13)).toBe('fizz')
})

test('contiene 5 e imprime buzz', ()=>{
    expect(contains(25)).toBe('buzz')
})

