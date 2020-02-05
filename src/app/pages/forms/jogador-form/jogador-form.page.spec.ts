import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogadorFormPage } from './jogador-form.page';

describe('JogadorFormPage', () => {
  let component: JogadorFormPage;
  let fixture: ComponentFixture<JogadorFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogadorFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
