import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPessoaComponent } from './deletar-pessoa.component';

describe('DeletarPessoaComponent', () => {
  let component: DeletarPessoaComponent;
  let fixture: ComponentFixture<DeletarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarPessoaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
