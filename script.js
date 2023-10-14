let container = document.querySelector('.container')

function addBox(){
    let box = document.createElement('div');
    box.setAttribute('class', 'smallBox')
    container.appendChild(box);
}

for(let i = 0; i < 256; i ++){
    console.log(i);
    addBox();
}

let boxes = container.querySelectorAll('.smallBox')

boxes.forEach((box)=> box.addEventListener('mouseenter', () =>{
    box.style.backgroundColor = 'blue';
}))