import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from './model';

@Injectable()
export class AppService {
private datos;
private observer = new Subject();
public $obs = this.observer.asObservable();

    inform(value) {
        this.observer.next(value);
    }
    getDatos() {
        return this.datos;
    }
    setDatos(value) {
        this.datos = value;
    }
    onLike (idx): void {
    }
    onDislike(idx): void {
    }

    getPerson(id: number) {

    }

    getAllPersons(){

    }
}
