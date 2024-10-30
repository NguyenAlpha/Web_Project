// add sản phẩm vào giỏ hàng
const btn = document.querySelectorAll(
  "i.fa-solid.fa-cart-shopping.product__cart"
);
// console.log(btn)
btn.forEach(function (
  element,
  index //Hiện phần tử và chỉ số cho nó
) {
  element.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var product = btnItem.parentElement; // Hiện thị thẻ con cấp 1
      var product2 = product.parentElement; //Hiện thị thẻ con cấp 2
      var product3 = product2.parentElement; //Hiện thị thẻ con cấp 3
      //   var productImg = product.querySelector("img");
      //   console.log(img);
      console.log(product3);
    }
  });
});

// ==================================Tổng tiền================================
