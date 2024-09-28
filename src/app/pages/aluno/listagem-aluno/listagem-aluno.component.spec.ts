import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAlunoComponent } from './listagem-aluno.component';

describe('ListagemAlunoComponent', () => {
  let component: ListagemAlunoComponent;
  let fixture: ComponentFixture<ListagemAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemAlunoComponent]
    });
    fixture = TestBed.createComponent(ListagemAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
