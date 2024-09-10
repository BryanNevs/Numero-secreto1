alert('Yo wassup! Welcome to the secret number');
let limit = 100
let secret_number = parseInt(Math.random()*limit + 1);
let guess; //chute
let guess_count=1;
while (secret_number != guess){
    guess = prompt(`Digite um numero de 1 and ${limit}`);
    if (secret_number == guess){
        //correção da concordancia numerica do ingles
        let word_attempt = guess_count > 1 ? 'attempts' : 'attempt';
            alert(`Já estava na hora!! Você acertou (: ${guess_count} ${word_tentativas}`) 
    }
    else{//errou entrou aqui
        //dica se é maior ou menor
        if(guess < secret_number){
            alert(`Você ainda está longe! O número secreto é maior que esse número ${guess}`);
        }
        else{
            alert(`Você passou!! O número secreto é menor que esse número ${guess}`);
        }
        guess_count++;
    }
}