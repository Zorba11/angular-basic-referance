import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: []
})

export class AppComponent {
name = "alen george"
images = [
  'https://picsum.photos/id/237/500/300',
  'https://picsum.photos/id/237/500/300',
  'https://picsum.photos/id/237/500/300'
]

imgUrl = 'https://picsum.photos/id/237/500/300'
currentDate = new Date()
cost = 2000
temperature = 25.3
pizza = {
  toppings: ['pepperoni', 'pineapple'],
  size: 'large'
}

getName() {
  return this.name;
}

changeImage(e: KeyboardEvent) {
  this.imgUrl = (e.target as HTMLInputElement).value;
}

logImg(event: string) {
  console.log(event);

}

blueClass = false;

fontSize = 16

}
