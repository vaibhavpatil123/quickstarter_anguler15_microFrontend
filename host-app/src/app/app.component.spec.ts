import { TestBed } from '@angular/core/testing';
import { RootAppComponent } from './app.component';

describe('RootAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootAppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RootAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'host-app' title`, () => {
    const fixture = TestBed.createComponent(RootAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('host-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, host-app');
  });
});
