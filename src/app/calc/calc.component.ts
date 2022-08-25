import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  result:string ='';
  constructor() { }
  storage = [];
  ngOnInit() {
  }
  @HostListener('document:keydown.enter')  EnterPressed(){
    if(this.storage.length !=0){
      this.equals();
    }
  }
  typing(key){
    if(key.charCode > 48 && key.charCode < 57 || key.charCode === 43 || key.charCode === 45 || key.charCode === 37 || key.charCode === 42 || key.charCode === 47){
      this.storage.length = 0;
      this.storage = this.result.split('');
      this.storage.push(String.fromCharCode(key.charCode));
      return true
    }else{
      return false
    }
    
  }
  addToResult(value:string){
    this.storage.push(value)
    this.result = this.storage.join('');
  }
  equals(){
    console.log(this.storage)
    this.result = eval(this.storage.join(''));
    this.storage.length = 0
    
  }
  clear(){
    this.storage.pop();
    this.result = this.storage.join('');
  }
  clearAll(){
    this.storage.length = 0;
    this.result = this.storage.join('');
  }
}
