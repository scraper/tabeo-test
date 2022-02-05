import { Page } from '@playwright/test';

export class MainPage {
  constructor(public readonly page: Page) {}
  
  signInBtn = this.page.locator('button:text("Sign in")');
  payMonthlyBtn = this.page.locator('button:text("Pay £20/mo")');
  payOnce = this.page.locator('button:text("Pay £220")');

  async goto() {
      await this.page.goto('/');
  }
}
