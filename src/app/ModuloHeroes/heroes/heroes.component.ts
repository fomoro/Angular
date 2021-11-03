import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
})

export class HeroesComponent {
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
    heroeBorrado: string = '';

    borrarHeroe() { 
        this.heroeBorrado = this.heroes.shift() || ''; 
    }
}