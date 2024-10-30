// add sản phẩm vào giỏ hàng
const btn = document.querySelectorAll("i.fa-solid.fa-cart-shopping.product__cart")
// console.log(btn)
btn.forEach(function(element,index) //Hiện phần tử và chỉ số cho nó 
{
   element.addEventListener("click",function(event)
{{
    var btnItem = event.target
    var product = btnItem.parentElement
    console.log(product)
}})
})

// ==================================Tổng tiền================================
