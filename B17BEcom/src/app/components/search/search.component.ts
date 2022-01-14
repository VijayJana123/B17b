import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public AllBooks: any = [];
  public allbook: any = [];
  public empty: string = "";

  formGroup!: FormGroup;
  filteredOptions: any;
  options: any;
  constructor(private data: BookService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getNames();

  }
  search1: string = "";


  getBooks() {
    this.data.getBooks().subscribe(((res: any) => {
      this.AllBooks = res
      this.allbook = res
    }))
  }




  searching(event: any) {
    this.search1 = (event.target as HTMLInputElement).value;
    console.log(this.search1);
    this.data.search.next(this.search1);
  }



  cancelSearch() {
    this.data.search.next(this.empty);
  }
  initForm() {
    this.formGroup = this.fb.group({
      'employee': ['']
    })
    this.formGroup.get('employee')?.valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  filterData(enteredData: any) {
    this.filteredOptions = this.options.filter((item: any) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames() {
    this.data.getData().subscribe((response: any) => {
      this.options = response;
      this.filteredOptions = response;
    })
  }

}
