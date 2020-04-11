import {
    Component
} from '@angular/core';
import {
    FormControl,
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-app';

    form = new FormGroup({
        name: new FormControl(''),
        length: new FormControl(''),
        width: new FormControl(''),
        heigth: new FormControl('')
    });
    volume = 0;
    totalVolume = 0;
    errors = [];
    objectList = [];

    round(value) {
        return parseFloat(value.toFixed(1));
    }

    addObject() {
        let data = this.form.value;

        if (data.length >= 0 &&
            data.width >= 0 &&
            data.heigth >= 0 &&
            data.name != '') {
            this.volume = this.round((data.length * data.width * data.heigth) / 1000000);
            this.totalVolume = this.round(this.volume + this.totalVolume);
            this.objectList.push({
                name: data.name,
                length: data.length,
                width: data.width,
                heigth: data.heigth,
                volume: this.volume
            });
        } else {
            this.errors.push('La hauteur, la largeur et la longueur doivent être supérieurs à 0.');
            this.errors.push('Le nom du meuble doit être renseigné.');
            this.errors.push('Merci de corriger la saisie.');
            console.log(this.errors);
        }
    }
    removeObject(index) {
        this.totalVolume = this.round(this.totalVolume - this.objectList.splice(index, 1)[0].volume);
    }
}
