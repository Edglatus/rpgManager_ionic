import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampanhasPage } from './campanhas.page';

describe('CampanhasPage', () => {
  let component: CampanhasPage;
  let fixture: ComponentFixture<CampanhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampanhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
