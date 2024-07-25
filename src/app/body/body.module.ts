import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './act-card/act-card.component';
import { VideoComponent } from './intro/video/video.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadMoreCardComponent } from './read-more-card/read-more-card.component';
import { LogoComponent } from './logo/logo.component';
import { LoaderComponent } from './loader/loader.component';
import { ActivityComponent } from './activity/activity.component';
import { GalleryDotsComponent } from '../gallery-dots/gallery-dots.component';
import { DialogImageComponent } from '../dialog-image/dialog-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        ReadMoreCardComponent,
        NavbarComponent,
        GalleryDotsComponent,
        GalleryComponent,
        ActivitiesComponent,
        CardComponent,
        VideoComponent,
        HeaderComponent,
        IntroComponent,
        ReadMoreComponent,
        FooterComponent,
        LogoComponent,
        LoaderComponent,
        DialogImageComponent,
        ActivityComponent
    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
    ],
    exports: [
        LoaderComponent,
        HeaderComponent,
        IntroComponent,
        GalleryComponent,
        ActivitiesComponent,
        ReadMoreComponent,
        FooterComponent,
    ],
})
export class BodyModule { }
