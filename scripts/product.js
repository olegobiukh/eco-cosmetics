'use strict';

const product = document.getElementById('product');
const productItem = JSON.parse(localStorage.getItem('shopItem'));
const productText = productItem.text.map(item =>
  `<p>${item}</p>`
).join(' ');

const productRender = () => {
  product.innerHTML = `<h1 class='product__title'>${productItem.title}</h1>
      <div class='product__image-wrapper'>
        <img
          src='${productItem.image}'
          alt='${productItem.title}'
          class='product__image'
        />
      </div>
      <p class='product__price'>${productItem.price} uah</p>
      <p class='product__weight'>${productItem.weight} g</p>
      <div class='product__text'>
        ${productText}
      </div>
      <a href='./shipping.html' class='button product__button'>add to bag</a>`;
};

productRender();
