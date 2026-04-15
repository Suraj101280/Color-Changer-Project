let randomBtn = document.querySelector('.randomBtn');
let colorInput = document.querySelector('#colorInput');
let applyBtn = document.querySelector('.applyBtn');
let currentColorValue = document.querySelector('.currentColorValue');

let container = document.querySelector('.container')
// console.log(randomBtn,colorInput,applyBtn,currentColorValue,container);

const colorArray = ['red','blue','green','yellow','lightseagreen',
    'cyan','tomato','lightcoral','aqua','white','black'];

const generateRandomColor = () =>{
    const randomNumber = Math.floor(Math.random()*colorArray.length);
    // console.log(randomNumber);
    return colorArray[randomNumber]
}
const changeColor = (color) =>{
    container.style.backgroundColor = color;
    currentColorValue.innerText = color;
}

const handleRandomBtnClick = () =>{
    // console.log("Random Btn click hua hai")
    let color = generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick = () =>{
    // console.log("Apply Btn click hua hai")
    // console.log(colorInput.value)
    const color = colorInput.value
    changeColor(color)
}

randomBtn.addEventListener('click',handleRandomBtnClick);
applyBtn.addEventListener('click',handleApplyBtnClick);
