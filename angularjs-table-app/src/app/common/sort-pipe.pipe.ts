import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: Employee[], args?: string): any {
    if(args == 'null') {
      return value;
    } else if(args == 'id') {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = i; j < value.length; j++) {
          if(value[i].id > value[j].id) {
            let temp = value[i];
            value[i] = value[j];
            value[j] = temp;
          }
        }   
      }
      return value;
    } else if(args == 'firstName') {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = i; j < value.length; j++) {
          if(value[i].firstName > value[j].firstName) {
            let temp = value[i];
            value[i] = value[j];
            value[j] = temp;
          }
        }   
      }
      return value;
    } else if(args == 'lastName') {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = i; j < value.length; j++) {
          if(value[i].lastName > value[j].lastName) {
            let temp = value[i];
            value[i] = value[j];
            value[j] = temp;
          }
        }   
      }
      return value;
    } else if(args == 'email') {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = i; j < value.length; j++) {
          if(value[i].email > value[j].email) {
            let temp = value[i];
            value[i] = value[j];
            value[j] = temp;
          }
        }   
      }
      return value;
    } else if(args == 'birthday') {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = i; j < value.length; j++) {
          if(value[i].birthday > value[j].birthday) {
            let temp = value[i];
            value[i] = value[j];
            value[j] = temp;
          }
        }   
      }
      return value;
    } else if(args == 'salary') {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = i; j < value.length; j++) {
          if(value[i].salary > value[j].salary) {
            let temp = value[i];
            value[i] = value[j];
            value[j] = temp;
          }
        }   
      }
      return value;
    }
  }

}
