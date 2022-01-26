import './src/styles/app.scss';
import Run from './cart';
import produk1 from './src/images/image-product-1.jpg';
import produk2 from './src/images/image-product-2.jpg';
import produk3 from './src/images/image-product-3.jpg';
import produk4 from './src/images/image-product-4.jpg';

const cart_btn = document.querySelector('#menu-cart');
const cart_item = document.querySelector('#cart-item');
const mobile_menu = document.querySelector('#mobile-menu');
const mobile_menu_btn = document.querySelector('#mobile-menu-btn');
const mobile_menu_btn_close = document.querySelector('#close');
const image_thumbs = document.querySelectorAll('.light-box img');
const btn_next = document.querySelector('#btn-next');
const btn_prev = document.querySelector('#btn-prev');
const p_image = document.querySelector('#active');

const product_image = [produk1, produk2, produk3, produk4];

let img_idx = 0;
changeImage(img_idx);

image_thumbs.forEach(function (img, idx) {
  if (+img.dataset.index === img_idx) {
    img.classList.add(['current']);
  } else {
    img.classList.remove('current');
  }
  img.addEventListener('click', function () {
    img_idx = +this.dataset.index;
    p_image.classList.remove('fade-in');
    p_image.setAttribute('src', product_image[img_idx]);
    ToggleActive();
    if (p_image.classList.contains('fade-in')) {
      p_image.classList.remove('fade-in');
    } else {
      p_image.classList.add('fade-in');
    }
  });
});

cart_btn.addEventListener('click', function (event) {
  event.preventDefault();
  cart_item.classList.toggle('show');
});

mobile_menu_btn.addEventListener('click', function (event) {
  event.preventDefault();
  mobile_menu.classList.add('show');
});
mobile_menu_btn_close.addEventListener('click', function (event) {
  event.preventDefault();
  mobile_menu.classList.remove('show');
});

btn_next.addEventListener('click', () => {
  img_idx += 1;
  changeImage(img_idx);
});
btn_prev.addEventListener('click', () => {
  img_idx -= 1;
  changeImage(img_idx);
});

function changeImage(index) {
  const i = Math.abs(index % product_image.length);
  p_image.setAttribute('src', product_image[+i]);
}

function ToggleActive() {
  image_thumbs.forEach(function (img, idx) {
    if (+img.dataset.index === img_idx) {
      img.classList.add('current');
    } else {
      img.classList.remove('current');
    }
  });
}
Run();
