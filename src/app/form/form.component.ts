import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true
  constructor() { }

  user = new User('', 'bill@gmail.com', 1234567890, 'default', 'morning', true)
  ngOnInit() {
    
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true
    } else {
      this.topicHasError = false
    }
  }

}
