import { Page } from '@playwright/test';

export class TempEmail {
  constructor(public readonly page: Page) {}
  emailInput = this.page.locator('//input[@id="i-email"]');
  emailTitle = this.page.locator('[class="title"]:text("qa-challenge@pego.dev")');
  emailFrame = this.page.frameLocator('[id="fullmessage"]');

  async goto() {
    await this.page.goto('https://tempmailo.com/', { waitUntil: 'domcontentloaded' });
  }

  async getTempEmail() {
    const email = await this.emailInput.inputValue();
    return email;
  }
}
