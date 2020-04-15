const scrollContainer = document.querySelector('.scrollContainer');
const stickyContainer = document.querySelector('.stickyContainer');
const images = document.querySelectorAll('.scrollContainer__image');
let maxScroll = scrollContainer.clientWidth * (images.length - 1);
var finishedScroll = false;


window.addEventListener('scroll', function (windowEvent) {

    // snap to top and stick it
    let scrollSectionTop = scrollContainer.getBoundingClientRect().top;
    let scrollSectionBottom = scrollContainer.getBoundingClientRect().bottom;
    // console.log(window.innerHeight);
    // console.log(scrollSectionBottom);

    if (finishedScroll == false) {
        if (scrollSectionTop <= 0) {

            stickyContainer.classList.add('scrollContainer--locked');
            let lastScrollPosition = window.scrollY;
            console.log(lastScrollPosition);
            scrollContainer.addEventListener('wheel', function _sideScroll(e) {

                //right direction
                if (e.deltaY >= 0) {
                    scrollContainer.scrollLeft += e.deltaY;
                    if (scrollContainer.scrollLeft >= maxScroll) {
                        finishedScroll = true;
                        stickyContainer.classList.remove('scrollContainer--locked');
                        scrollContainer.removeEventListener('wheel', _sideScroll);
                    }
                    // else {
                    //     stickyContainer.classList.add('scrollContainer--locked');
                    // }
                }
                //left direction
                else {
                    scrollContainer.scrollLeft -= -e.deltaY;
                    if (scrollContainer.scrollLeft <= maxScroll && scrollContainer.scrollLeft >= 0) {
                        stickyContainer.classList.add('scrollContainer--locked');
                    }

                    if (scrollContainer.scrollLeft == 0 && scrollContainer.scrollLeft < maxScroll) {
                        stickyContainer.classList.remove('scrollContainer--locked');
                        scrollContainer.removeEventListener('wheel', _sideScroll);
                    }
                }

            }, true);
        }
    }

});

