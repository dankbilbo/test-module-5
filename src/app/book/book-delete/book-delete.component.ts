import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../Book';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  id?: any;
  book?:Book;
  constructor(private bookService: BookService, private route: Router, private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPathvariable();
    this.getDeleteBookInfo()
  }

  getDeleteBookInfo(){
    this.bookService.findById(this.id).subscribe(result=>{
      this.book = result;
    },error => {
      console.log(error);
    })
  }

  getPathvariable() {
    this.id = this.activedRoute.snapshot.params['id'];
  }

  delete() {
    this.bookService.delete(this.id).subscribe(() => {
      this.route.navigateByUrl('/books');
    }, error => {
      console.log(error);
    });
    alert("Deleted")
  }

}
