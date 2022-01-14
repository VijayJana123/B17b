import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss']
})
export class BookFilterComponent implements OnInit {

  public AllBooks:any=[];
 public allbook:any=[];
  constructor(private data: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  

  

  getBooks(){
    this.data.getBooks().subscribe(((res: any)=>{
      this.AllBooks=res 
      this.allbook=res      
    }))
  }
  filter(category:any) {
    this.AllBooks= this.allbook
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a
      }
    })
    this.data.filter.next(this.AllBooks); 
  }

}
