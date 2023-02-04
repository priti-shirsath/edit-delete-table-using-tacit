import { Component } from '@angular/core';
import { AdditemserviceComponent } from './additemservice/additemservice.component';
import { todolist } from './todolist';
import { DeleteitemserviceComponent } from './deleteitemservice/deleteitemservice.component';
import { EdititemserviceComponent } from './edititemservice/edititemservice.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AdditemserviceComponent,DeleteitemserviceComponent,EdititemserviceComponent]
})
export class AppComponent {
  title = 'edit-delete-table-using-tacit';
  ItemTitle : string="";
  ItemDescription : string="";
  ItemList : todolist[]=[];
  IsEditable : boolean = false;
  EditItem? : todolist ;
  
  public addToList( ItemTitle : string,ItemDescription : string) {
   
    this.addservice.addItem(this.ItemList,ItemTitle,ItemDescription);
    this.ItemTitle="";
    this.ItemDescription="";
  }
  public EditToDoListItem(Item : todolist)
  {
    this.EditItem = Item;
    this.IsEditable = true;
    this.ItemTitle = Item.ItemTitle;
    this.ItemDescription = Item.ItemDescription;
  }
  public SaveUpdatedData()
  {
    //var foundIndex = this.editService.SearchItemFromList(this.ItemList,this.EditItem.SrNo);
    var foundIndex=this.ItemList.findIndex(x => x.SrNo == this.EditItem?.SrNo);
    this.ItemList[foundIndex].ItemDescription = this.ItemDescription;
    this.ItemList[foundIndex].ItemTitle = this.ItemTitle;
    this.ItemDescription="";
    this.ItemTitle ="";
  }
  public DeleteToDoListItem(Item : todolist)
  {
    this.ItemList=this.deleteservice.deleteListItem(this.ItemList,Item.SrNo)
  }
  constructor(public addservice : AdditemserviceComponent,public deleteservice : DeleteitemserviceComponent,
    public editService : EdititemserviceComponent){}
}
