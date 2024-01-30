import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService ) { }

  get characters():Character[]
  {
    return [...this.dbzService.characters]; //* recibo una copia del array original.
  }

  public onDeleteCharacter( id: string ):void
  {
    this.dbzService.deleteCharacterById( id );
  }

  public onNewCharacter( character: Character ): void
  {
    this.dbzService.addCharacter( character );
  }

}