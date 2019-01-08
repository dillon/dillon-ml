// press 'm'
document.onkeypress = function (e) {
  e = e || window.event;
  if (e.key === 'm' || e.keyCode === 77) document.body.style.backgroundImage = "url('images/manga.png')"
};
document.onkeyup = function (e) {
  e = e || window.event;
  if (e.key === 'm' || e.keyCode === 77) document.body.style.backgroundImage = 'none';
}