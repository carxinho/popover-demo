// wrapper.addEventListener('click',function(e){
//     e.stopPropagation();//阻止事件冒泡
// })
// clickMe.addEventListener('click',function(){
//     popover.style.display = 'block'
// })
// document.addEventListener('click',function(){
//     popover.style.display = 'none'
// })

$(clickMe).on('click', function() {
    $(popover).show()
    setTimeout(function() {
        $(document).one('click', function() {
            $(popover).hide()
        })
    }, 0)  
})
  