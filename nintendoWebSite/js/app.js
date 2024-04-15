window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.revelar');

    for(var i = 0; i < reveals.length; i++){
        var windowHight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealTop < windowHight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('ative');
        }
    }
}