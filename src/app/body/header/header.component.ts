import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    ngAfterViewInit() {
        var prevScrollpos = window.scrollY;
        
        /* Get the header element and it's position */
        var headerDiv = document.getElementById("header-id");
        if (!headerDiv)
            return;

        var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
        
        window.onscroll = function() {
        if (!headerDiv)
            return;

          var currentScrollPos = window.scrollY;
          console.log("asd");
        
          /* if scrolling down, let it scroll out of view as normal */
          if (prevScrollpos <= currentScrollPos){
              headerDiv.classList.remove("fixedToTop");
              headerDiv.style.top ="-7.2rem";
          }
          /* otherwise if we're scrolling up, fix the nav to the top */
          else{  
              headerDiv.classList.add("fixedToTop");
              headerDiv.style.top = "0";
          }
        
          prevScrollpos = currentScrollPos;
        }
    }
}
