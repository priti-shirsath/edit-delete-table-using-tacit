import { Component,Injectable } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { todolist } from '../todolist';

@Component({
  selector: 'app-additemservice',
  templateUrl: './additemservice.component.html',
  styleUrls: ['./additemservice.component.css']
})
@Injectable()
export class AdditemserviceComponent {

   addItem(ItemList : todolist[],ItemTitle: string,  ItemDescription: string)
   {
      return ItemList.push(new todolist(ItemList.length +1,ItemTitle,ItemDescription));
      console.log(ItemList);
   }
}
