import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Asegúrate de que el import sea correcto
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { isLoggedIn: () => true } }, // Simulación de AuthService
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } } // Simulación de Router
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
    spyOn(authService, 'isLoggedIn').and.returnValue(true); // Simula que el usuario está logueado
    expect(authGuard.canActivate()).toBe(true);
  });

  it('should block activation and navigate to login if the user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false); // Simula que el usuario no está logueado
    expect(authGuard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
