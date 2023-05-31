
let horario = new Date()
let hora = horario.getHours()
let minuto = horario.getMinutes()

let texto = document.querySelector('div#texto')
let res = document.getElementById('resposta')
let img = document.createElement('img')
img.setAttribute('id','foto')
if(hora>=0 && hora <12){
    img.setAttribute('src','./imagens/manha.jpeg')
    document.body.style.backgroundColor = '#D99554'
}
if(hora >=12 && hora<18){
    img.src = './imagens/tarde.jpeg'
    document.body.style.backgroundColor = '#845054'
}
if(hora>=18 && hora<24){
    img.setAttribute('src','./imagens/noite.jpeg')
    document.body.style.backgroundColor ='#352C49'
}
if(minuto<10){
    minuto = `0${minuto}`
}
texto.innerHTML = `<p> Agora são ${hora}:${minuto}`
res.appendChild(img)
   