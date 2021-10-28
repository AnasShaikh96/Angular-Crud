import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book = {
    title: '',
    description: ''
  };
  isBookAdded = false;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  addBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description
    };
    if (!data.title) {
      alert('Please add a title');
      return
    }
    this.bookService.create(data).subscribe(
      response => {
        console.log(response, "added");
        this.isBookAdded = true;
      },
      error => {
        console.log(error)
      }
    );
  }

  newBook(): void {
    this.isBookAdded = false;
    this.book = {
      title: '',
      description: ''
    }
  }
}
