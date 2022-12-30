import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postsForm!: FormGroup;

  get title(): AbstractControl {
    return this.postsForm.controls?.['title'];
  }
  get description(): AbstractControl {
    return this.postsForm.controls?.['description'];
  }

  constructor() {}

  ngOnInit(): void {
    this.postsForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAddPost(): void {}
}
