let array = []; 

function boardReset () {
    array = [];
    const boardBox = document.querySelectorAll("td");
    for(let i = 0; i < boardBox.length; i++){
        boardBox[i].textContent = '';
    }
}

function play (element) {
    const player = document.getElementById('player');
    const clickedBox = document.getElementById(element);

    if (!clickedBox.innerText) {
        clickedBox.innerText = player.innerText;
        if (player.innerText === 'X') {
            array[element] = 'X';
            player.innerText = 'O';
        } else {
            array[element] = 'O;'
            player.innerText = 'X';
        }
    }
        
    const topLeft = array[0];
    const topCenter = array[1];
    const topRight = array[2];
    const middleLeft = array[3];
    const middleCenter = array[4];
    const middleRight = array[5];
    const bottomLeft = array[6];
    const bottomCenter = array[7];
    const bottomRight = array[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        boardReset();
        return;
        
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        boardReset();
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        boardReset();
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        boardReset();
        return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        boardReset();
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        boardReset();
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        boardReset();
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        boardReset();
        return;
    }


    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (array[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner");
        boardReset();
    }
}

