import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(public readonly page: Page) {}
  url = 'https://checkout.stripe.com';
  price = this.page.locator('//div[contains(@class,"ProductSummaryTotalAmount")]');
  emailInput = this.page.locator('[class="ReadOnlyFormField-title"]');
  cardInput = this.page.locator('[id="cardNumber"]');
  cardExpiry = this.page.locator('[id="cardExpiry"]');
  cardCvc = this.page.locator('[id="cardCvc"]');
  subscribeBtn = this.page.locator('//button[contains(@class,"SubmitButton")]');

  async waitToLoad() {
    await this.page.waitForURL(`${this.url}/**`);
  }
}
