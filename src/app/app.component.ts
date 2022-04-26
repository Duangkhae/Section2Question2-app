import { Component, OnInit } from '@angular/core';
import { CategoriesDetail } from './CategoriesDetail';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Section2Question2-app';
  Categories!:CategoriesDetail ;
  selectedCategoriesDetail?:CategoriesDetail
  constructor(private http:HttpClient){}

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter =filterValue.trim()

  }
   stri?:string[]
  dataSource = new MatTableDataSource(this.stri);
  displayedColumns: string[] = ['categories'];
  fetchPosts(): void {
    this.http.get('https://api.publicapis.org/categories').subscribe((data) => {

     this.Categories= data as CategoriesDetail;
     this.stri = this.Categories.categories;
     this.dataSource.data =this.stri;
    })
  }
  ngOnInit(): void {
    //this.getCategories();
    this.fetchPosts();
    console.log('DataSource', this.dataSource)
    
  }

}
