document.getElementById('action-btn').onclick = () => {
  document.getElementById('products').scrollIntoView( {behavior: 'smooth'} );
}

const links = document.querySelectorAll('.nav__link');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    document.getElementById(links[i].getAttribute('data-link')).scrollIntoView( {behavior: 'smooth'} );
  }
}

const buttons = document.getElementsByClassName('products__item-btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    document.getElementById('order').scrollIntoView( {behavior: 'smooth'} );
  }
}

const burger = document.getElementById('burger');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
document.getElementById('order-action').onclick = (e) => {
  e.preventDefault();
  let hasError = false;

  [burger, name, phone].forEach(item => {
    if (!item.value) {
      item.style.background = 'red';
      hasError = true;
    } else {
      item.style.background = '';
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach(item => { 
      item.value = '';
    });
    alert('Спасибо за заказ!');
  }
};


const prices = document.getElementsByClassName('products__item-price');

document.getElementById('change-currency').onclick = (e) => {
  let currentCurrency = e.target.innerText;
  let newCurrency = '$';
  let coefficient = 1;

  if (currentCurrency === '$') {
    newCurrency = '₽';
    coefficient = 75;
  } else if (currentCurrency === '₽') {
    newCurrency = 'BYN';
    coefficient = 3;
  } else if (currentCurrency === 'BYN') {
    newCurrency = '€';
    coefficient = 0.9;
  } else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
  }
}