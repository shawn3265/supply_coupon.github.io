const searchInput = document.getElementById('searchInput');
const boxes = document.querySelectorAll('.box');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  boxes.forEach(box => {
    const text = box.querySelector('p').textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
});
