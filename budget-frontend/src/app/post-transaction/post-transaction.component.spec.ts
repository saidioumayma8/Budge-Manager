import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTransactionComponent } from './post-transaction.component';

describe('PostTransactionComponent', () => {
  let component: PostTransactionComponent;
  let fixture: ComponentFixture<PostTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
