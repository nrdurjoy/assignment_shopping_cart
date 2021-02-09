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
    addToCart(itemTitle, itemPrice);
}

let cartWrapper = document.getElementsByClassName('cart_wrapper')[0];

function addToCart(itemTitle, itemPrice) {
    let div = document.createElement('div');
    div.classList.add('row');
    let listContent = `
    <div class="col cartTitle">${itemTitle}</div>
    <div class="col cartPrice"> ${itemPrice}</div>
    <div class="col cartBtn"><button class="btn btn-danger btn-sm">Delete</button></div>`;
    div.innerHTML = listContent;
    cartWrapper.appendChild(div);
    //remove cart item
    let removeBtn = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeFun);
    }

}

function removeFun(e) {
    e.target.parentElement.parentElement.remove();
    priceAfterRemove();
}


