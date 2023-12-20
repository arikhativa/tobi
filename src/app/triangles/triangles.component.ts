import { Component } from '@angular/core';

@Component({
    selector: 'app-triangles',
    standalone: true,
    imports: [],
    templateUrl: './triangles.component.html',
    styleUrl: './triangles.component.scss'
})
export class TrianglesComponent {
    ngOnInit() {
        const svg = document.getElementById('triangels');
        if (svg) {
            svg.onclick = (e) => {
                const color = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
                const randomColor = () => color[Math.floor(Math.random() * color.length)];
                document.documentElement.style.setProperty('--pink-color', randomColor());
                document.documentElement.style.setProperty('--blue-color', randomColor());
            }

        }

    }

}
