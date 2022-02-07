import { Page } from '@playwright/test';

export class TempEmail {
  constructor(public readonly page: Page) {}
  // emailInput = this.page.locator('//input[@id="i-email"]');
  emailInput = this.page.locator('[id="temp-mail"]');
  // emailTitle = this.page.locator('[class="title"]:text("qa-challenge@pego.dev")');
  emailTitle = this.page.locator('[class="sendename"]:has-text("qa-challenge@pego.dev")');
  // emailFrame = this.page.frameLocator('[id="fullmessage"]');

  async goto() {
    // await this.page.goto('https://tempmail.dev/');
    await this.page.goto('https://tempmail.tel/');
    await this.page.waitForTimeout(2000);
  }

  async getTempEmail() {
    const email = await this.emailInput.inputValue();
    console.log(email);
    return email;
  }
}
