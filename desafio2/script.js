//Programa que verifica se o numero é primo ou não
let numero = prompt('Digite um numéro:');
let auxiliar = 1;
let contador=0;
if (numero>1){
    while(auxiliar<=numero){
        if(numero%auxiliar==0){
            contador ++;
        }
        auxiliar ++;
    }
    if(contador<=2){
        window.alert('Numero  primo!');
        
    }
    else{
        window.alert('Numero não é primo!');
    }
}
else{
    window.alert('Numero não é primo!');
}
