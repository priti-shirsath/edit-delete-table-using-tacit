import { Component } from '@angular/core';
import { todolist } from '../todolist';

@Component({
  selector: 'app-deleteitemservice',
  templateUrl: './deleteitemservice.component.html',
  styleUrls: ['./deleteitemservice.component.css']
})
export class DeleteitemserviceComponent {


  deleteListItem(ItemList : todolist[],srNo : number)
   {
      ItemList = ItemList.filter((item) => item.SrNo !== srNo);
      return ItemList;
   }
}
