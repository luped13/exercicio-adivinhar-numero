
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let numero = aleatorio(0, 50);


let i = 10;

while (i > 0) {


    let chute = Number(prompt('Adivinhe um número entre 0 e 50.'));


    if (chute === numero) {
        alert('Parabéns, você acertou!!!');
        i = 0;
    }

    else {
        if (chute > numero) {
            alert('Que pena, você errou. Seu chute é maior do que o número.')
            alert("Você perdeu uma vida.")
            i--;
        }

        else {
            alert('Que pena, você errou. Seu chute é menor do que o número.')
            alert("Você perdeu uma vida.")
            i--;
        }
    }
}