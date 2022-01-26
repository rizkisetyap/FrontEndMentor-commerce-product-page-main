export const btn_add2_cart = document.getElementById('add');
const btn_add_item = document.getElementById('add-item');
const btn_sub_item = document.getElementById('sub-item');
const count_item = document.querySelector('span.count');
const sum_item = document.getElementById('jumlah');
const cart_item = document.getElementById('item-cart');

let count = 0;
let cartCount = count;

function setInnerHtml(jumlah) {
  if (jumlah <= 0) {
    cart_item.innerHTML = 'Your Cart Empty';
  } else {
    cart_item.innerHTML = `<div class="cart_item_container">
  <img src="./src/images/image-product-1-thumbnail.jpg" alt="" />
  <div class="cart_item_text">
    <h2>Fall Limited Edition Sneakers</h2>
    <h4><span>$125.00</span><span>x ${jumlah}</span> <span>$375.00</span></h4>
  </div>
  <span class="cart_item_icon"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></span>
  </div>
  <button class="checkout">Checkout</button>`;
  }
}
export default function Run() {
  sum_item.textContent = count;
  count_item.textContent = cartCount;
  setInnerHtml(count);
  btn_sub_item.disabled = true;

  btn_add2_cart.addEventListener('click', function () {
    console.log(count);
    sum_item.textContent = count;
    // itemCart.innerHTML = setInnerHtml(count);
    setInnerHtml(count);
  });

  btn_add_item.addEventListener('click', function () {
    btn_sub_item.disabled = false;
    count += 1;
    count_item.textContent = count;
  });

  btn_sub_item.addEventListener('click', function () {
    console.log(count);
    if (count <= 0) {
      this.disabled = true;

      // return;
    } else {
      this.disabled = false;
      count -= 1;
      count_item.textContent = count;
    }
  });
}

function itemCart() {
  const container = document.createElement('div');
}
