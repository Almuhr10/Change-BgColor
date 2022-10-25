const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['brown','red','green','#3b5998','#9c3319'];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
    // bodyBcg.style.backgroundColor = 'blue'; 
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}