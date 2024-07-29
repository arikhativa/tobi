import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Loader } from './utils/loader';
import { IntroComponent } from './body/intro/intro.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { ActivitiesComponent } from './body/activities/activities.component';
import { FooterComponent } from './body/footer/footer.component';
import { LanguageService } from './services/language.service';

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
        let ref = this.container.createComponent(IntroComponent);
        ref = this.container.createComponent(GalleryComponent);
        ref = this.container.createComponent(ActivitiesComponent);
        ref = this.container.createComponent(FooterComponent);
    }
}

