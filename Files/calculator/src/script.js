calc = () => {
    let res = document.getElementById('res').innerHTML;
    if (res) document.getElementById('res').innerHTML = eval(res);
    else return alert('Selecione os números para calcular!');
}

add = numb => {
    let res = document.getElementById('res').innerHTML;
    if (res.length > 15) return alert('Limite de caracteres: 15');
    document.getElementById('res').innerHTML += numb;
}

clr = () => document.getElementById('res').innerHTML = " ";

bspc = () => {
    let res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length - 1);
}