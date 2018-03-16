import { Injectable ,Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppService {
    language :string;
    @Output() change: EventEmitter<string> = new EventEmitter();
    setLanguage(language: string){
        this.language = language; 
        this.change.emit(this.language);
    }
    getLanguage(){
        return this.language;
    }
}