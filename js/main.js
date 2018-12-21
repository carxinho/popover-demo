wrapper.addEventListener('click', function (e) {
    e.stopPropagation()
  })
 
 var n = true
  clickMe.addEventListener('click', function (e) {
    popover.style.display = (n ? 'block' : 'none')
    n = !n
  })

  document.addEventListener('click', function () {
    popover.style.display = 'none'
    n = !n
  })