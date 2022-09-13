/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load todos from the server (Observable)', () => {
  //   let service = fixture.debugElement.injector.get(TodoService);
  //   // The observable is wrapped into a second array
  //   spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3, 4]]));
  //   fixture.detectChanges();
  //   expect(component.todos.length).toBe(4);

  // });

  it('should load todos from the server (Promise)', fakeAsync(() => {
    let service = fixture.debugElement.injector.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3, 4]));
    fixture.detectChanges();

    // Use this with fakeAsync and tick to simulate async that behaves sync
    tick();
    expect(component.todos.length).toBe(4);

    // Use this to deal with a promise and make the assertion in the then
    // fixture.whenStable().then(() => {
    //   expect(component.todos.length).toBe(4);
    // })
    
  }));

});
