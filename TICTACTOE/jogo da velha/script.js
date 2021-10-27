a1 = document.getElementById('a1');
img1 = document.getElementById('img a1')
a2 = document.getElementById('a2');
img2 = document.getElementById('img a2')
a3 = document.getElementById('a3');
img3 = document.getElementById('img a3')

b1 = document.getElementById('b1');
img4 = document.getElementById('img b1')
b2 = document.getElementById('b2');
img5 = document.getElementById('img b2')
b3 = document.getElementById('b3');
img6 = document.getElementById('img b3')

c1 = document.getElementById('c1');
img7 = document.getElementById('img c1')
c2 = document.getElementById('c2');
img8 = document.getElementById('img c2')
c3 = document.getElementById('c3');
img9 = document.getElementById('img c3')
result = document.getElementById('resultado')
IMGturno = document.getElementById('turno')
restart = document.getElementById('restart')

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
    
})

vitoriasX = 0;
vitoriasO = 0;
empates = 0;

var turno = 0;
var A1 = 0,A2 = 0,A3 = 0,B1 = 0,B2 = 0,B3 = 0,C1 = 0,C2 = 0,C3 = 0;


function Turno(turno){
    if (turno % 2 == 0) {
        IMGturno.src = 'circulo.png'
       
       
        return 'X';
    }else{
        IMGturno.src = 'x.jpeg'
      
        return 'O';
    }
}
function linha1(){
    img1.src = 'linha-h.png';
    img4.src = 'linha-h.png';
    img7.src = 'linha-h.png';
}
function linha2(){
    img2.src = 'linha-h.png';
    img5.src = 'linha-h.png';
    img8.src = 'linha-h.png';
}
function linha3(){ 
    img3.src = 'linha-h.png';
    img6.src = 'linha-h.png';
    img9.src = 'linha-h.png';
}
function coluna1(){
    img1.src = 'linha-v.png'
    img2.src = 'linha-v.png'
    img3.src = 'linha-v.png'
}
function coluna2(){
    img4.src = 'linha-v.png'
    img5.src = 'linha-v.png'
    img6.src = 'linha-v.png'
}
function coluna3(){
    img7.src = 'linha-v.png'
    img8.src = 'linha-v.png'
    img9.src = 'linha-v.png'
}
function diagonalE(){
    img1.src = 'diagonal-esquerda.png'
    img5.src = 'diagonal-esquerda.png'
    img9.src = 'diagonal-esquerda.png'
}
function diagonalD(){
    img7.src = 'diagonal-direita.png'
    img5.src = 'diagonal-direita.png'
    img3.src = 'diagonal-direita.png'
}
a1.addEventListener('click', () => {
    if (A1 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img1.src = 'x.jpeg';
        A1 = 'x';
        testeX();

    }else{
        img1.src = 'circulo.png';
        A1 = 'o';
        testeY();
    }

    empate()
    turno++;
 
})
a2.addEventListener('click', () => {
    if (A2 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img2.src = 'x.jpeg';
        A2 = 'x';
        testeX();
    }else{
        img2.src = 'circulo.png';
        A2 = 'o';
        testeY();
    }
    empate()
    turno++;
})
a3.addEventListener('click', () => {
    if (A3 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img3.src = 'x.jpeg';
        A3 = 'x';
        testeX();
    }else{
        img3.src = 'circulo.png';
        A3 = 'o';
        testeY();
     
    }
    empate()
    turno++;
})
b1.addEventListener('click', () => {
    if (B1 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img4.src = 'x.jpeg';
        B1 = 'x';
        testeX();
    }else{
        img4.src = 'circulo.png';
        B1 = 'o';
        testeY();
    }
    empate()
    turno++;
})
b2.addEventListener('click', () => {
    if (B2 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img5.src = 'x.jpeg';
        B2 = 'x';
        testeX();
    }else{
        img5.src = 'circulo.png';
        B2 = 'o';
        testeY();
    }
    empate()
    turno++;
})
b3.addEventListener('click', () => {
    if (B3 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img6.src = 'x.jpeg';
        B3 = 'x';
        testeX();
    }else{
        img6.src = 'circulo.png';
        B3 = 'o';
        testeY();
    }
    empate()
    turno++;

})
c1.addEventListener('click', () => {
    if (C1 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img7.src = 'x.jpeg';
        C1 = 'x';
        testeX();
    }else{
        img7.src = 'circulo.png';
        C1 = 'o';
        testeY();
    }
    empate()
    turno++;
})
c2.addEventListener('click', () => {
    if (C2 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img8.src = 'x.jpeg';
        C2 = 'x';
        testeX();
    }else{
        img8.src = 'circulo.png';
        C2 = 'o';
        testeY();
    }
    empate()
    turno++;
})
c3.addEventListener('click', () => {
    if (C3 != 0) {
        return;
    }
    if (Turno(turno) === 'X') {
        img9.src = 'x.jpeg';
        C3 = 'x';
        testeX();
    }else{
        img9.src = 'circulo.png';
        C3 = 'o';
        testeY();
    }
    empate()
    turno++;
})
restart.addEventListener('click', () => {
        img1.src = 'fundo-branco.png';
        img2.src = 'fundo-branco.png';
        img3.src = 'fundo-branco.png';
        img4.src = 'fundo-branco.png';
        img5.src = 'fundo-branco.png';
        img6.src = 'fundo-branco.png';
        img7.src = 'fundo-branco.png';
        img8.src = 'fundo-branco.png';
        img9.src = 'fundo-branco.png';
        A1 = 0,A2 = 0,A3 = 0,B1 = 0,B2 = 0,B3 = 0,C1 = 0,C2 = 0,C3 = 0;
        turno  = 0
        IMGturno.src = 'x.jpeg'

    }
)
function resultado(){
    result.innerHTML = 'vitorias X : ' + vitoriasX + '<br>'+' vitorias de O : ' + vitoriasO +'<br>'+ ' empates : ' + empates;
}
function testeX(){
    if (A1 == B1 && B1 == C1 && A1 == 'x' ) {
        linha1()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (A2 == B2 && B2 == C2 && A2 == 'x' ) {
        linha2()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (A3 == B3 && B3 == C3 && A3 == 'x' ) {
        linha3()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (A1 == A2 && A2 == A3 && A1 == 'x' ) {
        coluna1()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (B1 == B2 && B2 == B3 && B1 == 'x' ) {
        coluna2()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (C1 == C2 && C2 == C3 && C1 == 'x' ) {
        coluna3()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (A1 == B2 && B2 == C3 && A1 == 'x' ) {
        diagonalE()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
    if (C1 == B2 && B2 == A3 && C1 == 'x' ) {
        diagonalD()
        alert('X ganhou')
        vitoriasX++;
        gameOver()
        resultado();
    }
}
function testeY(){

    if (A1 == B1 && B1 == C1 && A1 == 'o' ) {
        linha1()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (A2 == B2 && B2 == C2 && A2 == 'o' ) {
        linha2()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (A3 == B3 && B3 == C3 && A3 == 'o' ) {
        linha3()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (A1 == A2 && A2 == A3 && A1 == 'o' ) {
        coluna1()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (B1 == B2 && B2 == B3 && B1 == 'o' ) {
        coluna2()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (C1 == C2 && C2 == C3 && C1 == 'o' ) {
        coluna3()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (A1 == B2 && B2 == C3 && A1 == 'o' ) {
        diagonalE()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
    if (C1 == B2 && B2 == A3 && C1 == 'o' ) {
        diagonalD()
        alert('O ganhou')
        vitoriasO++;
        gameOver()
        resultado();
    }
}
function empate(){ 
    if((A1 == 'x' || A1 == 'o') && (A2 == 'x' || A2 == 'o') && (A3 == 'x' || A3 == 'o') && (B1 == 'x' || B1 == 'o') && (B2 == 'x' || B2 == 'o') && (B3 == 'x' || B3 == 'o') && (C1 == 'x' || C1 == 'o') && (C2 == 'x' || C2 == 'o') && (C3 == 'x' || C3 == 'o')){
        alert('Empate')
        empates++;
        gameOver()
        resultado();
    }
    }
function gameOver(){
    A1 = 1,A2 = 1,A3 = 1,B1 = 1,B2 = 1,B3 = 1,C1 = 1,C2 = 1,C3 = 1;
    turno = 0;
}
