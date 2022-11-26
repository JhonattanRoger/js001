let randomNumber = Math.floor(Math.random() * 100) + 1;

        const guesses = document.querySelector('.guesses');
        const lastResult = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');

        const guessSubmit = document.querySelector('.guessSubmit');
        const guessField = document.querySelector('.guessField');

        let guessCount = 1;
        let resetButton;

        function checkGuess() {
            const userGuess = Number(guessField.value);
            if (guessCount === 1) {
                guesses.textContent = 'Palpites anteriores: '
            }
            guesses.textContent += `${userGuess},  `;

            if (userGuess === randomNumber) {
                lastResult.textContent = 'Parabéns! Você acertou!';
                lastResult.style.backgroundColor = 'green';                
                lastResult.style.borderRadius = '8px';                
                lowOrHi.textContent = '';
                setGameOver();
            } else if (guessCount === 10) {
                lastResult.textContent = 'GAME OVER!';
                lowOrHi.textContent = '';
                setGameOver();
            } else {
                lastResult.textContent = 'Errado!';
                lastResult.style.backgroundColor = 'red';
                lastResult.style.borderRadius = '8px'; 
                if (userGuess < randomNumber) {
                    lowOrHi.textContent = 'Tente um número mais alto!';
                }
                if (userGuess > randomNumber) {
                    lowOrHi.textContent = 'Tente um número mais baixo!';
                }
            }

            guessCount++;
            guessField.value = '';
            guessField.focus();
        }

        guessSubmit.addEventListener('click', checkGuess);

        function setGameOver() {
            guessField.disabled = true;
            guessSubmit.disabled = true;
            showButton = document.getElementById("showButton");
            resetButton = document.createElement('button');
            resetButton.textContent = 'Tentar novamente';

            // Com certeza isso está errado, mas estou estilizando o botão por aqui até descobrir uma forma mais fácil xD
            resetButton.style.backgroundColor = "rgb(44, 42, 42)"
            resetButton.style.color = "white"
            resetButton.style.borderRadius = "8px"
            resetButton.style.padding = "8px"
            resetButton.style.border = "none"
            resetButton.style.display = "block"
            resetButton.style.margin = "auto"
            resetButton.style.marginBottom = "16px"
            resetButton.style.cursor = "pointer"


            showButton.append(resetButton);            
            resetButton.addEventListener('click', resetGame);
        }

        function resetGame() {
            guessCount = 1;            

            const resetParas = document.querySelectorAll('.resultParas p');
                for (const resetPara of resetParas) {
                    resetPara.textContent = '';
                }

            resetButton.parentNode.removeChild(resetButton);

            guessField.disabled = false;
            guessSubmit.disabled = false;
            guessField.value = '';
            guessField.focus();

            lastResult.style.backgroundColor = 'pink';            

            randomNumber = Math.floor(Math.random() * 100) + 1;
        }