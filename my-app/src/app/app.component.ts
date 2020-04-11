import {
    Component
} from '@angular/core';
import {
    FormControl, FormGroup
} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-app';

    data = new FormGroup({
        name: new FormControl(''),
        length: new FormControl(''),
        width: new FormControl(''),
        heigth: new FormControl('')
    });
    volume = 0;
    errors = [];

    calculate() {
        if(this.data.value.length >= 0 
           && this.data.value.width >= 0 
           && this.data.value.heigth >= 0){
            this.volume = (this.data.value.length 
                           * this.data.value.width 
                           * this.data.value.heigth)/1000000;
        } else {
            this.errors.push('La hauteur, la largeur et la longueur doivent être supérieurs à 0. Merci de corriger la saisie.');
            console.log(this.errors);
        }
    }
}
