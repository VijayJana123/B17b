import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  public AllBooks:any;
 searchKey:string="";
  constructor(private data : BookService) { }
  ngOnInit(): void {

    this.getBooks();
    this.data.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

    this.data.filter.subscribe((res:any)=>{
      this.AllBooks=res;
    })

    this.data.price.subscribe((res:any)=>{
      this.AllBooks=res;
    })
  }

  getBooks(){
    this.data.getBooks().subscribe(((res: any)=>{
      this.AllBooks=res      
    }))
  }

}

