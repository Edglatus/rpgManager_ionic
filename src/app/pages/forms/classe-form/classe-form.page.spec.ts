import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasseFormPage } from './classe-form.page';

describe('ClasseFormPage', () => {
  let component: ClasseFormPage;
  let fixture: ComponentFixture<ClasseFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasseFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
