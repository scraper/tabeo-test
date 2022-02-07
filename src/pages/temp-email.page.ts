import { Page } from '@playwright/test';

export class TempEmail {
  constructor(public readonly page: Page) {}
  emailInput = this.page.locator('[class="address"]');
  emailTitle = this.page.locator('span:has-text("qa-challenge@pego.dev")');

  async goto() {
    await this.page.goto('https://dropmail.me/en/');
    await this.page.waitForTimeout(2000);
  }

  async getTempEmail() {
    const email = await this.emailInput.innerText();
    console.log(email);
    return email;
  }
}
