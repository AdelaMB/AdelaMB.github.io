document.getElementById('readMoreLink').addEventListener('click', function(e) {
  e.preventDefault();
  var text = document.getElementById('text');
  text.classList.toggle('show');
  if (text.classList.contains('show')) {
    document.getElementById('readMoreLink').innerText = 'Read less';
  } else {
    document.getElementById('readMoreLink').innerText = 'Read more';
  }
});
  