import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodosComponent } from './listar-todos.component';

describe('ListarTodosComponent', () => {
  let component: ListarTodosComponent;
  let fixture: ComponentFixture<ListarTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
