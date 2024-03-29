import { Component } from '@angular/core';

class imageList {
    constructor(
        public src: string,
        public alt: string
    ) { }
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    public readonly imageList: imageList[] = [
        {
            src: "/assets/images/gallery/1.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/2.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/3.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/4.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/5.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/6.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/7.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/8.jpg",
            alt: "description",
        },
    ];

    private readonly MOVE_LEFT: string = "translateX(-120%)";
    private readonly MOVE_RIGHT: string = "translateX(120%)";
    private readonly MOVE_CENTER: string = "translateX(0)";
    private readonly SMALL_SIZE: string = "0.8";
    private readonly REGULAR_SIZE: string = "1";
    private readonly TO_DARKNESS: string = "brightness(60%)";
    private readonly TO_BRIGHTNESS: string = "brightness(100%)";
    private readonly TO_BLUER: string = "blur(2px)";
    private readonly TO_CLEAR: string = "blur(0)";

    private _currentImage: number = 0;
    private _leftZIndex: number = 0;
    private _rightZIndex: number = this.imageList.length;
    private _images: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("img-container") as HTMLCollectionOf<HTMLElement>;

    ngAfterViewInit() {
        this._images = document.getElementsByClassName("img-container") as HTMLCollectionOf<HTMLElement>;
        this._resetArrayValues(this._images);
    }

    private _imageMoveLeft(img: CSSStyleDeclaration) {
        img.transform = this.MOVE_LEFT;
        img.scale = this.SMALL_SIZE;
        img.filter = this.TO_DARKNESS + this.TO_BLUER;
        img.zIndex = this._leftZIndex.toString();
    }

    private _imageMoveCenter(img: CSSStyleDeclaration) {
        img.transform = this.MOVE_CENTER;
        img.scale = this.REGULAR_SIZE;
        img.filter = this.TO_BRIGHTNESS; + this.TO_CLEAR;
        img.zIndex = Math.max(this._rightZIndex, this._leftZIndex).toString();

    }

    private _imageMoveRight(img: CSSStyleDeclaration) {
        img.transform = this.MOVE_RIGHT;
        img.scale = this.SMALL_SIZE;
        img.filter = this.TO_DARKNESS + this.TO_BLUER;
        img.zIndex = this._rightZIndex.toString();
    }

    // <---- img
    turnLeft() {
        if (this._currentImage >= 0 && this._currentImage < this._images.length - 1) {
            const oldIndex = this._currentImage;
            this._imageMoveLeft(this._images[this._currentImage].style);
            this._currentImage++;
            this._imageMoveCenter(this._images[this._currentImage].style);
            this._leftZIndex++;
            this._rightZIndex--;
            this._changeDots(oldIndex, this._currentImage)
        }
    }

    // img ---->
    turnRight() {
        if (this._currentImage > 0 && this._currentImage <= this._images.length - 1) {
            const oldIndex = this._currentImage;
            this._imageMoveRight(this._images[this._currentImage].style);
            this._currentImage--;
            this._imageMoveCenter(this._images[this._currentImage].style);
            this._leftZIndex--;
            this._rightZIndex++;
            this._changeDots(oldIndex, this._currentImage)
        }
    }

    private _resetArrayValues(imgs: HTMLCollectionOf<HTMLElement>) {
        for (let i = 1; i < imgs.length; i++) {
            this._imageMoveRight(imgs[i].style);
            imgs[i].style.zIndex = `${imgs.length - i}`;
        }
        this._imageMoveCenter(imgs[0].style);
        this._changeDots(0, 0)
    }

    private _changeDots(lastIndex: number, newIndex: number) {
        let dots = document.getElementsByClassName("dot-con");
        dots[lastIndex].classList.remove("big-dot-con");
        dots[newIndex].classList.add("big-dot-con");
    }
}
