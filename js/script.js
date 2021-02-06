//Variable Define
const cart = document.getElementsByClassName('btn-primary');

//update cart list
for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', updateCart);
}

function updateCart(e) {
    item = e.target.parentElement.parentElement;
    itemTitle = item.getElementsByClassName('product_title')[0].innerText;
    itemPrice = item.getElementsByClassName('price')[0].innerText;
    itemPic = item.getElementsByClassName('img')[0].src;
    addToCart(itemTitle, itemPrice, itemPic);
    //update total price
    let totalPrice = 0;
    let cartPrice = cartWrapper.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        totalPrice = totalPrice + parseInt(cartPrice[i].innerText.replace('৳', '').replace(',', ''));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');


}

let cartWrapper = document.getElementsByClassName('cart_wrapper')[0];

function addToCart(itemTitle, itemPrice, itemPic) {
    let div = document.createElement('div');
    div.classList.add('row');
    let listContent = `<div class="col cartImages"><img src="${itemPic}" /></div>
    <div class="col cartTitle">${itemTitle}</div>
    <div class="col cartPrice"> ${itemPrice}</div>
    <div class="col cartBtn"><button class="btn btn-danger">Delete</button></div>`;
    div.innerHTML = listContent;
    cartWrapper.appendChild(div);
    //remove cart item
    let removeBtn = document.getElementsByClassName('btn-danger');
    console.log(removeBtn);
    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeFun);
    }

}

function removeFun(e) {
    e.target.parentElement.parentElement.remove();
    priceAfterRemove();
}
//price remove after erase item
function priceAfterRemove(e) {
    let totalPriceRemove = 0;
    let cartPrice = cartWrapper.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        totalPriceRemove = totalPriceRemove + parseInt(cartPrice[i].innerText.replace('৳', '').replace(',', ''));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPriceRemove).toLocaleString('en');
}


