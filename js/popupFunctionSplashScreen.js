function rer() {

    let overlay	= document.querySelector('.overlay1'),
    overlay1 = document.querySelector('.overlay2'),
    mClose	= document.querySelectorAll('[data-close]'),
    mStatus	= false;

    // for (let el of mClose) {
    //     el.addEventListener('click', modalClose);
    // }

    document.addEventListener('keydown', modalClose);

    overlay.classList.remove('fadeOut1');
    overlay.classList.add('fadeIn1');
    overlay1.classList.remove('fadeOut1');
    overlay1.classList.add('fadeIn1');
    mStatus = true;

    function modalClose(event) {
        if(event.key==="Escape"){
            if (mStatus) {
                overlay.classList.remove('fadeIn1');
                overlay.classList.add('fadeOut1');
                overlay1.classList.remove('fadeIn1');
                overlay1.classList.add('fadeOut1');
                mStatus = false;
            }
        }
    }
}