let items = document.querySelectorAll('.header div');
let content = document.querySelector('.content');
let currentIndex = 1;
items.forEach(item => {
  item.addEventListener('click', event => {
    changeContent(item); currentIndex = [...items].indexOf(item);
  });
});
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  changeContent(items[currentIndex]);
}, 10000);
function changeContent(item) {
  document.querySelector('.header .active').classList.remove('active');
  item.classList.add('active');
  content.querySelector('h1').innerText = item.innerText;
  content.querySelector('p').innerText = item.getAttribute('data-content');
}

function toggleButtons() {
  var checkBox = document.getElementById("ageCheck");
  var downloadBtn = document.getElementById("downloadBtn");
  var tradeBtn = document.getElementById("tradeBtn");
  if (checkBox.checked) {
    downloadBtn.disabled = false;
    tradeBtn.disabled = false;
  } else {
    downloadBtn.disabled = true;
    tradeBtn.disabled = true;
  }
}