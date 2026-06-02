import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  fromparentval: any;
  @Input() fromparent: string = '';
  @Output() fromchild: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    console.log('create employee component ngOnInit called', this.fromparent);
  }

  onFromChildClicked(){
    this.fromchild.emit('i am from child');
  }

}
