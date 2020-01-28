import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampanhaFormPage } from './campanha-form.page';

describe('CampanhaFormPage', () => {
  let component: CampanhaFormPage;
  let fixture: ComponentFixture<CampanhaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampanhaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
