import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Loader } from './utils/loader';
import { IntroComponent } from './body/intro/intro.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { ActivitiesComponent } from './body/activities/activities.component';
import { FooterComponent } from './body/footer/footer.component';
import { LanguageService } from './services/language.service';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AboutToubiComponent } from './about-toubi/about-toubi.component';
import { AboutHouseComponent } from './about-house/about-house.component';
import { NavbarComponent } from './body/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private languageService: LanguageService) {
        this.languageService.updateDirection("he")
    }

    readonly CHECK_INTERVAL = 1000;

    intervalId: any;

    loader: Loader = new Loader
    isLoading: boolean = true

    @ViewChild('container', { read: ViewContainerRef, static: true }) container?: ViewContainerRef;

    ngAfterViewInit() {
        this.loader.loadDependencies();
        this.intervalId = setInterval(() => {
            this.checkDependencies()
        }, this.CHECK_INTERVAL);
    }

    checkDependencies = () => {
        if (this.loader.isDone) {
            this.isLoading = false
            clearInterval(this.intervalId)
            this.createAllComponents()
        }
    }

    createAllComponents() {
        if (!this.container) return
        this.container.createComponent(NavbarComponent);
        this.container.createComponent(IntroComponent);
        this.container.createComponent(AboutToubiComponent);
        this.container.createComponent(AboutHouseComponent);
        this.container.createComponent(ActivitiesComponent);
        this.container.createComponent(GalleryComponent);
        // this.container.createComponent(ReadMoreComponent); - no need. we added the links somewhere else
        this.container.createComponent(FooterComponent);
    }
}

