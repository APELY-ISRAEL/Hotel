const form = document.getElementById('form');
const forma = document.getElementById('forma');
const ins = document.getElementById('ins');
const sign = document.getElementById('sign');

ins.addEventListener("click",function(){
    form.style.display = 'none';
    forma.style.display = 'block';
})
sign.addEventListener("click",function(){
    form.style.display = 'block';
    forma.style.display = 'none';
})
