import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle as solid } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-gallery-dots',
  templateUrl: './gallery-dots.component.html',
  styleUrl: './gallery-dots.component.scss'
})
export class GalleryDotsComponent {
  @Input() len!: number;
  @Input() activeIndex!: number;
  @Input() onDotClicked?: (index: number) => void;

  dots?: IconProp[];
  regular = regular
  solid = solid

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.dots = new Array(this.len).fill(regular)
    this.dots[this.activeIndex] = solid
    this.cdRef.detectChanges();
  }

  public scrollHandler = (scrollContainer: HTMLElement): number => {
    const full = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const part = (Math.abs(scrollContainer.scrollLeft) / full)

    const ret = part * (this.len - 1)
    return Math.round(ret)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeIndex']) {
      const oldValue = changes['activeIndex'].previousValue;
      const newValue = changes['activeIndex'].currentValue;
      if (this.dots) {
        this.dots[oldValue] = regular
        this.dots[newValue] = solid
      }
    }
  }

  handleDotClick(i: number) {
    if (this.onDotClicked) {
      this.onDotClicked(i)
    }
  }


}
