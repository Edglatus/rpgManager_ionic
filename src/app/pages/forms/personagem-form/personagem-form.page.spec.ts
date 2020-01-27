import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonagemFormPage } from './personagem-form.page';

describe('PersonagemFormPage', () => {
  let component: PersonagemFormPage;
  let fixture: ComponentFixture<PersonagemFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonagemFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
