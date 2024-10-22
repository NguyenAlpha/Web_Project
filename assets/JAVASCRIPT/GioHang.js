// add sản phẩm vào giỏ hàng
const btn = document.querySelectorAll("button")
// console.log(btn)
btn.addEventListenrt("click",function(envent)){
    {
        var btnItem = envent.target
        var product = btnItem.parentElement
        console.log(product)
    }
}
// ==================================Tổng tiền================================
