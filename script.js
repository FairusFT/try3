window.addEventListener('scroll', function() {
    const navbar = this.document.querySelector('.navbar');
    const teksNav = this.document.querySelectorAll('.nav')
    const a = this.document.getElementsByClassName('a');
    if(this.window.scrollY > 80) {
        navbar.style.background = '#3D8D7A';
        navbar.style.transition = '1s ease in out';
        // a.forEach(button => {
        //     button.style.color = 'white';
        // })
    } else if(this.window.scrollY <= 80) {
        navbar.style.background = 'transparent';
        // a.forEach(button => {
        //     button.style.color = 'black';
        // })
    }
})

const pemberitahuan = document.getElementById('buy');

function sayBuy() {
    if(pemberitahuan.click) {
        alert("Silahkan Beli di Stand 10-8")
    }
}