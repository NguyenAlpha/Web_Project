// add sản phẩm vào giỏ hàng
const btn = document.querySelectorAll(
  "i.fa-solid.fa-cart-shopping.product__cart"
);

btn.forEach(function (element, index) {
  element.addEventListener("click", function (event) {
    var btnItem = event.target;
    var product = btnItem.parentElement; // Hiển thị thẻ con cấp 1
    var product2 = product.parentElement; // Hiển thị thẻ con cấp 2
    var product3 = product2.parentElement; // Hiển thị thẻ con cấp 3
    var product4 = product3.parentElement; // Hiển thị thẻ con cấp 4
    var productImg = product3.querySelector("img").src; // Đọc hình
    var productName = product3.querySelector("a.product__name").innerText; // tên sản phẩm
    var productPrice = product3.querySelector("span.product__new").innerText; // giá sản phẩm
    console.log(productPrice); // Corrected line
    console.log(productImg);
    console.log(productName);
    addcart(productImg, productName, productPrice);
  });
});


// ==================================Tổng tiền===========================
