import { Component, HostListener, ElementRef } from '@angular/core';

enum Direction {
    DOWN = 0,
    UP = 1,
}

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent {
    scaleX: number[] = [1, 1, 1];
    scaleY: number[] = [1, 1, 1];
    private HIGH_LIMIT: number = 150;
    private SCALE_LIMIT: number[] = [0.9, 0.95, 1];
    private SCALE_STEP: number = 0.01;
    private lastScrollTop: number = 0;
    private scrollDirection: Direction = Direction.DOWN;

    ngOnInit() {
        this.checkElementPositionAndScale();
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: Event) {
        let st = window.scrollY || document.documentElement.scrollTop;
        if (st > this.lastScrollTop) {
            this.scrollDirection = Direction.DOWN;
        } else {
            this.scrollDirection = Direction.UP;
        }
        this.lastScrollTop = st;

        this.checkElementPositionAndScale();
    }

    checkElementPositionAndScale() {
        const l = document.querySelectorAll('.card');
        l.forEach((e, i) => {
            const observer = new IntersectionObserver(
                ([e]) => {
                    if (e.boundingClientRect.top < this.HIGH_LIMIT) {
                        if (this.scrollDirection === Direction.DOWN && (this.scaleX[i] > this.SCALE_LIMIT[i]) && (this.scaleY[i] > this.SCALE_LIMIT[i])) {
                            this.scaleX[i] -= this.SCALE_STEP;
                            this.scaleY[i] -= this.SCALE_STEP;
                        }
                    }
                    else if (this.scrollDirection === Direction.UP && (this.scaleX[i] < 1 && this.scaleY[i] < 1)) {
                        this.scaleX[i] += this.SCALE_STEP;
                        this.scaleY[i] += this.SCALE_STEP;
                    }
                }, { threshold: [1] }
            );
            observer.observe(e)
        });
    }

    get transformStyle0(): string {
        return `scaleX(${this.scaleX[0]}) scaleY(${this.scaleY[0]})`
    }
    get transformStyle1(): string {
        return `scaleX(${this.scaleX[1]}) scaleY(${this.scaleY[1]})`
    }
    get transformStyle2(): string {
        return `scaleX(${this.scaleX[2]}) scaleY(${this.scaleY[2]})`
    }
}


