    var para,image;
    function parallax () {
      para = window.pageYOffset;
      image = document.getElementById('image')
      image.style.top = para * .3 + 'px';
    }
    window.addEventListener('scroll',parallax);