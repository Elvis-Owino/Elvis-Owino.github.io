var navigation = document.querySelector('.navigation');
document.querySelector('.toggler').onclick = function () {
    this.classList.toggle ('active')
    navigation.classList.toggle('active') 
      
};

var current=document.querySelector('.current');
var imgs=document.querySelectorAll('.imgs img');
var opacity=0.4;

imgs.forEach(img => img.addEventListener('click', imgClick));
function imgClick(e) {}

imgs[0].style.opacity=opacity;

function imgClick (e){
   imgs.forEach( img => (img.getElementsByClassName.opacity=1))
   current.src=e.target.src;
   current.classList.add('fade-in');
   setTimeout(()=> current.classList.remove('fade-in'), 500)
}


