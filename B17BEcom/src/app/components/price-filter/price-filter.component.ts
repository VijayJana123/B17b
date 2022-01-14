import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

  public AllBooks:any=[];
  public allbook:any=[];
  public rate:any;
  public store:any=[];
  max:any;
  min:any;
  constructor(private data: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  getBooks(){
    this.data.getBooks().subscribe(((res: any)=>{
      this.AllBooks=res 
      this.allbook=res     
    }))
  }

  filter() {
    this.AllBooks= this.allbook
    .filter((a:any)=>{
      if(a.price<=this.rate){
        return a
      }
    })
    this.data.price.next(this.AllBooks);
    this.max=this.AllBooks[0].price;
    for(let i =1;i<this.AllBooks.length;i++){
     if (this.AllBooks[i].price>this.max){
       this.max=this.AllBooks[i].price;
       
     }
       
    }
  }


}
