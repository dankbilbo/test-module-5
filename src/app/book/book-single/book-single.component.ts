import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../Book';

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.css']
})
export class BookSingleComponent implements OnInit {
  id?:any;
  searchedBook?: Book;

  constructor(private bookService: BookService,private route:Router,private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPathvariable()
    this.getBookInfo();

  }
  getPathvariable() {
    this.id = this.activedRoute.snapshot.params['id'];
  }

  getBookInfo() {
    this.bookService.findById(this.id).subscribe(result => {
      this.searchedBook = result;
    }, error => {
      this.route.navigateByUrl("")
      console.log(error);

    });
  }

}
