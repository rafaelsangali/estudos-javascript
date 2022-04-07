//1

let nomeCompleto = "Rafael Lombardi Sangali";

 console.log(nomeCompleto);

 //2

 let numeroA = 5;
 let numeroB = 3;
 let resultado  = numeroA * numeroB;

console.log(resultado);

//3

function saudacao () {
    
}
console.log(saudacao("Oi eu sou o Goku!"))

//4

function multiplica (num1, num2) {
    return num1 * num2;
}
console.log(multiplica(2,4))

function podeDirigir (idade) {
    return idade >= 18 ? 'Você pode dirigir' : 'Você não pode dirigir';
} 
console.log(podeDirigir(18));

for ( i = 0; i <= 20; i++) {
    console.log(i);
}

for ( i = 0; i <= 20; i++) {
    if ( i % 2 !== 0){
        console.log(i);
    }
}

let resultadoTabuada;

function tabuada(number) {
    for ( j = 0; i <= 10; j++) {
       return resultadoTabuada = number * j;
    }
}

console.log(tabuada(3));