import { Component } from '@angular/core';
import { todolist } from '../todolist';

@Component({
  selector: 'app-edititemservice',
  templateUrl: './edititemservice.component.html',
  styleUrls: ['./edititemservice.component.css']
})
export class EdititemserviceComponent {

  SearchItemFromList(ItemList : todolist[],SrNo:number)
   {
      return ItemList.findIndex(x => x.SrNo == SrNo);
   }

}
