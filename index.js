let container = document.querySelector('.grid-container');
container.style.position = "relative";
container.style.height = "500px";

let nextBtn = document.querySelector('.next-btn');

let list = [];

function main() {
    
    for (let i = 0; i < 15; i++) {
        let block = document.createElement("div");
        list.push(block);
        container.appendChild(block);
        block.style.height = "100px";
        block.style.width = "100px";
        block.style.display = "inline-block";
        block.style.position = "absolute";
        block.style.backgroundColor = "black";
        block.style.color = "white";
        block.style.fontSize = "50px";
        block.style.textAlign = "center";
    }

    setPosition(list, 15, 10, 6);
}

function setPosition(list, offset, gap, n) {
    const f = (item, index) => {
        let width = item.style.width;
        width = width.slice(0, -2);
        let num = Number(width);
        let x = (num + gap) * (index % n) + offset;
        let y = (num + gap) * (Math.floor(index / n)) + offset;
        item.style.left = x + 'px';
        item.style.top = y + 'px';
    }

    list.forEach(f);
}

main();

list[0] = 3

list[0].innerHTML = "1";

let t = 0;

nextBtn.onclick = () => {
    list[t].innerHTML = "";
    t = (t + 1) % list.length;
    list[t].innerHTML = "1";
}


///// сложный массив в простой

let mArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let oArr = [];

function multiArrToOne (multiArr, oneArr) {
    // перебираем первый слой массива
    for (let i = 0; i < multiArr.length; i++) {
        // получаем итемы из массива
        for (let n = 0; n < multiArr[i].length; n++) {
            // получаем распакованный массив (можно и без этого, но так попроще)
            let mArrValue = multiArr[i][n];
            // пушим распакованный вложенный массив в обычный
            oneArr.push(mArrValue);
        }
    }
};

multiArrToOne(mArr, oArr);

// проверяем, вроде работает 
console.log(oArr);

let newArray = mArr.flat(Infinity); // или можно встроенным методом сделать, то же самое получится
// console.log(oArr);

///// простой массив в сложный

let = simpleArr = [1, 2, 3, 4, 5, 6, 7, 8];

function listToMatrix(list, elementsPerSubArray) {
    let matrix = [];
    let i;
    let k;
    
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        
        matrix[k].push(list[i]);
    }
    
    return matrix;
}

let matrix = listToMatrix(simpleArr, 3);

console.log(matrix);
