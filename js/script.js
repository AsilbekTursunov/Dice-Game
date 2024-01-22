const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

// Players number

const playZero = document.querySelector('.player--0')
const playOne = document.querySelector('.player--1')

// Players number

const curZero = document.querySelector('#current--0');
const firZero = document.querySelector('#current--1');

// PLayers score

const firScore = document.querySelector('#score--0');
const secScore = document.querySelector('#score--1');


// Players Name

const nameOne = document.getElementById('name--0');
const nameTwo = document.getElementById('name--1');


// New game

const newGame = document.querySelector('.btn--new')



newGame.addEventListener('click', () => {
    playZero.classList.remove('player-bg-winner');
    nameOne.classList.remove('winner-name');
    playOne.classList.remove('player-bg-winner');
    nameTwo.classList.remove('winner-name');
    btnRoll.classList.add('btn--roll');
    btnHold.classList.add('btn--hold');
    dice.src = `img/dice-5.png`;
    firScore.textContent = '0'
    secScore.textContent = '0'
    curZero.textContent = '0'
    firZero.textContent = '0'

})



function final() {

}


function delVal(which, where) {
    which.classList.forEach(item => {
        if (item != 'player--active') {
            where.textContent = '0';

        }
    });
}

function chanVal(which, where, what, Ram) {
    which.classList.forEach(item => {
        if (item == 'player--active') {
            where.textContent = Ram + what;

        }
    });
}

function winner() {
    if (Number(firScore.textContent) >= 100 || Number(secScore.textContent) >= 100) {

        btnRoll.classList.remove('btn--roll');
        btnHold.classList.remove('btn--hold');
        dice.src = `img/win.png`;
        curZero.textContent = '0'
        firZero.textContent = '0'

        if (Number(firScore.textContent) >= 100) {
            playZero.classList.add('player-bg-winner');
            nameOne.classList.add('winner-name');
            secScore.textContent = '0'
        }
        if (Number(secScore.textContent) >= 100) {
            playOne.classList.add('player-bg-winner');
            nameTwo.classList.add('winner-name');
            firScore.textContent = '0'
        }
    }

}




btnRoll.addEventListener('click', () => {
    const ram = (Number(Math.trunc(Math.random() * 6)) + 1);
    dice.src = `img/dice-${ram}.png`;
    let zero = Number(curZero.textContent);
    let first = Number(firZero.textContent);
    if (ram === 1) {
        playZero.classList.toggle('player--active');
        playOne.classList.toggle('player--active');
        delVal(playZero, curZero);
        delVal(playOne, firZero);
    }

    chanVal(playZero, curZero, zero, ram);
    chanVal(playOne, firZero, first, ram);


    //    Winner code section

    winner();

    //    Winner code section

});

btnHold.addEventListener('click', () => {
    let first = Number(firScore.textContent);
    let second = Number(secScore.textContent);
    playZero.classList.forEach(item => {
        if (item == 'player--active') {
            firScore.textContent = Number(curZero.textContent) + first;
            curZero.textContent = '0';
        }
    });

    //    Winner code section

    winner();

    //    Winner code section


    playOne.classList.forEach(item => {
        if (item == 'player--active') {
            secScore.textContent = Number(firZero.textContent) + second;
            firZero.textContent = '0';
        }
    });
})