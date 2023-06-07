import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ficus-religiosa-mfe';

  food = [
    { id: 1, select: false, name: 'dumping' },
    { id: 2, select: false, name: 'burger' },
    { id: 3, select: false, name: 'sandwitch' },
  ];
  public parentSelector: boolean = false;

  onChangeFood($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    
    this.food = this.food.map((d) => { 

      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }

      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      
      return d;
      
    })

    const allItemsSelectedExceptFood = this.food.every((item) => item.id !== -1 && item.select == true);
    console.log(allItemsSelectedExceptFood);
    if (allItemsSelectedExceptFood) {
      this.parentSelector = true;
    }
    
    console.log(id, isChecked);
    console.log(this.food)
  }
}
