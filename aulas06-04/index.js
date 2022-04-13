//1
console.log('------------------------------------ 1');
let nomeCompleto = "Rafael Lombardi Sangali";

 console.log(nomeCompleto);

 console.log('------------------------------------ 2');
 //2

 let numeroA = 5;
 let numeroB = 3;
 let resultado  = numeroA * numeroB;

console.log(resultado);

console.log('------------------------------------ 3');
//3

function saudacao(mensagem) {
     return mensagem = console.log("Oi eu sou o Goku!");
}
console.log(saudacao());

console.log('------------------------------------ 4');
//4

function multiplica (num1, num2) {
    return num1 * num2;
}
console.log(multiplica(2,4))

console.log('------------------------------------ 5');
//5

function podeDirigir (idade) {
    return idade >= 18 ? 'Você pode dirigir' : 'Você não pode dirigir';
} 
console.log(podeDirigir(18));

console.log('------------------------------------ 6');
//6

for ( i = 0; i <= 20; i++) {
    console.log(i);
}
console.log('------------------------------------ 7');
//7
for ( k = 0; k <= 20; k++) {
    if ( k % 2 !== 0){
        console.log(k);
    }
}

let resultadoTabuada;

console.log('------------------------------------ 8');
//8

function tabuada(num3) {
    for (let index = 1; index <=10; index++) {
        console.log(num3 + " x " + index + " = " + (num3 * index))
      
    }
}
console.log(tabuada(4))

console.log('------------------------------------ 9');
//9

 function converterEmHoras (num4) {
    if ( num4 % 60 === 0) {
        let resultado2 = num4 / 60;
        console.log('Isso da um total de ' + resultado2 + ' horas');
    } if ( num4 > 60){
        let resultado3 = parseInt(num4 / 60);
        let resultado4 = num4 % 60;
        console.log('Isso da um total de ' + resultado3 + ' horas e ' + resultado4 + ' minutos');
    } if (num4 < 0){
        console.log('Opa, opa, número negativo não vale');
    } else if (num4 < 60){
        console.log('Você sabe que ' + num4 + ' minutos, não são 1 hora completa');
    }
 }

 console.log(converterEmHoras(90));