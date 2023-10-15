let container = document.querySelector('.container')



function addBox(){
    let box = document.createElement('div');
    box.setAttribute('class', 'smallBox')
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
    console.log(i);
    addBox();
}}


createGrid();
etchASketch();

let button = document.querySelector('button');
button.addEventListener('click', () => {
    resetGrid();
    gridSize = prompt(`Adjust Grid Size (1x1 - 100x100)`)
    createGrid(gridSize);
    etchASketch();
});
