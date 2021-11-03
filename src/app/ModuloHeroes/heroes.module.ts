import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
    declarations: [
        HeroeComponent,
        HeroesComponent
    ],
    exports: [
        HeroesComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule { }