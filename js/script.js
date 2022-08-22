var userlj = document.querySelector('.user')
userlj.addEventListener('click', function () {
    location.assign('https://www.bilibili.com')
})

var localnav = document.querySelector('.local-nav')
var localnavli = localnav.querySelectorAll('li')
function locallj() {
    for (var i = 0; i < localnavli.length; i++) {
        localnavli[i].addEventListener('click', function () {
            location.assign('https://www.bilibili.com')
        })
    }
}
locallj()

var sales = document.querySelector('.sales-hd')
var salesspanlj = sales.querySelector('span')
sales.addEventListener('click', function () {
    location.assign('https://www.bilibili.com')
})
