import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../book.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  displayedColumns: String[] = ['id', 'title', 'author', 'description', 'edit', 'delete'];
  dataSource: any;
  allBook?: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getALlBook();
  }

  getALlBook() {
    this.bookService.getALl().subscribe(result => {
        this.allBook = result;
        this.dataSource = new MatTableDataSource(this.allBook);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, error => {
        console.log(error);
      }
    );
  }

  filter(searchedKey: any) {
    console.log(searchedKey);
    this.dataSource.filter = searchedKey.trim().toLowerCase();
  }


}
