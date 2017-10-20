import { Component, OnInit } from '@angular/core';
import {Category} from '../category/category.model';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  
  catItems:Category[] = [];

  constructor() { 
    this.catItems.push(new Category('Drinks', '../../../assets/img/drinks.jpg'));
    this.catItems.push(new Category('Baking', '../../../assets/img/baking.jpg'));
    this.catItems.push(new Category('Fruits', '../../../assets/img/fruits.jpg'));
    this.catItems.push(new Category('Vegetables', '../../../assets/img/vegetables.jpg'));
    this.catItems.push(new Category('Meat', '../../../assets/img/meat.jpg'));
    this.catItems.push(new Category('Breakfast', '../../../assets/img/pancake.jpg'));
    this.catItems.push(new Category('Seasoning', '../../../assets/img/seasoning.jpg'));
    this.catItems.push(new Category('Cleaning', '../../../assets/img/cleaning.jpg'));
    this.catItems.push(new Category('Personal Care', '../../../assets/img/personal_care.jpg'));
  }

  ngOnInit() {
    
  }

  getCategories(){
    this.catItems.slice();
  }

}
