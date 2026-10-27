import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule],
})
export class App {
  a = 10
  b = 11
  people = [
    {
      id: 1,
      name: 'Moussa',
      age: 29
    },
    {
      id: 2,
      name: 'Bamby',
      age: 22
    },
    {
      id: 3,
      name: 'Bousso',
      age: 23
    }
  ]
}
