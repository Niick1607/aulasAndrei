const body = document.querySelector('body');
const clickText = document.getElementById('clicks');
const img = document.querySelector('img');
const input = document.getElementById('input');
let i = 0;

document.getElementById('clicksBt').addEventListener("click", function() {
    i++;
    clickText.innerText = `Você clicou ${i} vezes!`;
});

document.addEventListener("keydown", function(event) {
    clickText.innerText = `Você clicou na tecla ${event.key.toUpperCase()}!`;
});

document.getElementById('send').addEventListener("click", function() {
    alert(`Saudações, ${input.value} (${input.value.length})`);
    body.style.backgroundColor = document.getElementById('color').value;
    if (input.value.trim() === '') {
        input.style.backgroundColor = 'red';
      } else {
        input.style.backgroundColor = 'green';
      }
});

img.addEventListener('mouseover', function() {
    img.src = 'acesa.jpeg';
});
img.addEventListener('click', function() {
    img.src = 'apagada.avif';
});

alert("Mensagem direto no html!");
alert(2+2);