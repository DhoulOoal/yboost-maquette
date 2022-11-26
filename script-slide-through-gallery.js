let galleryContainer = document.querySelector('.gallery-container');
let galleryControlsContainer = document.querySelector('.gallery-controls');
let galleryControls = ['previous', 'next'];
let galleryItems = document.querySelectorAll('.gallery-item');


class Slide {
    constructor(container, items, controls) {
        this.slideContainer = container;
        this.slideArray = [...items];
        this.slideControls = controls;
    }

    updateGallery(){
        this.slideArray.forEach(yo => {
            yo.classList.remove('gallery-item-1');
            yo.classList.remove('gallery-item-2');
            yo.classList.remove('gallery-item-3');
        });

        this.slideArray.slice(0,5).forEach(yo, i => {
            yo.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous') {
            this.slideArray.unshift(this.slideArray.pop());
        } else {
            this.slideArray.push(this.slideArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.slideControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        let triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

let mySlide = new Slide(galleryContainer, galleryItems, galleryControls);

mySlide.setControls();
mySlide.useControls();