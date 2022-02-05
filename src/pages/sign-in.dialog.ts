import { Page } from '@playwright/test';

export class SignInDialog {
  constructor(public readonly page: Page) {}
  
  emailInput = this.page.locator('//input[@id="email"]');
  loginWithEmailBtn = this.page.locator('//button[@type="submit"]');
  loginWithGoogle = this.page.locator('button:text("Sign in with Google")');
}
