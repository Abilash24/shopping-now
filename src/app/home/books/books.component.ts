import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }
onChange(files){
// do whatever you want with the file
  console.log(files[0]); // print array containing file metadata
  console.log(files[0].name); // print file name
  console.log(files[0].type) // print file type
 
  }
  ngOnInit() {
  }

}