let number = document.getElementById('number');
let num = Number(number.innerText);
const upCount = () =>{
    num += 1;
    number.innerHTML = num;
}
const downCount = () =>{
    num -= 1;
    number.innerHTML = num;
}
