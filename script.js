let container = document.querySelector('.container')
let gridSize


function parseBoxSize(){
   return 480 / gridSize;
}

function addBox(){
    let box = document.createElement('div');
    box.setAttribute('class', 'smallBox')
    let raw = parseBoxSize();
    box.style.cssText = `height: ${raw}px; width: ${raw}px;`;
    container.appendChild(box);
}

function resetGrid(){
    let boxes = container.querySelectorAll('.smallBox');
    boxes.forEach((box) =>{
        container.removeChild(box);
    })
}

etchASketch = () => {let boxes = container.querySelectorAll('.smallBox')
boxes.forEach((box)=> box.addEventListener('mouseenter', () =>{
    box.style.backgroundColor = 'blue';
}))}

createGrid = (gridSize = 256) => {for(let i = 0; i < (gridSize); i ++){
    addBox();
}}


createGrid();
etchASketch();

let button = document.querySelector('button');
button.addEventListener('click', () => {
    resetGrid();
    gridSize = (prompt(`Adjust Grid Size (1x1 - 100x100). Enter a single value. (eg 10 will render 10x10)`));
    createGrid(gridSize ** 2);
    etchASketch();
    console.log(gridSize)
});
