import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard'; 
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { isLoggedIn: () => true } }, 
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } } 
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow activation if the user is logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(authGuard.canActivate()).toBe(true);
  });

  it('should block activation and navigate to login if the user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false); 
    expect(authGuard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);  
  });
});
