 
const filterBtns = document.querySelectorAll('.filter-btn');
const cars = document.querySelectorAll('.col, .col-1');
const buyBtns = document.querySelectorAll('.buy');

 
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    cars.forEach(car => {
      if (filter === 'all') {
        car.style.display = 'block';
      } else {
        car.style.display =
          car.dataset.category === filter ? 'block' : 'none';
      }
    });
 
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


 
buyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 

    const carName = btn
      .closest('.col, .col-1')
      .querySelector('h5').innerText;

    alert(`🛒 ${carName} added to cart!`);
  });
});



const carCards = document.querySelectorAll('.col, .col-1');

carCards.forEach(card => {
  card.addEventListener('click', () => {
    const page = card.dataset.page;

    if (page) {
      window.location.href = page;  
    }
  });
});
