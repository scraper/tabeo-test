import { Page } from '@playwright/test';

export class ThankYouPage {
  constructor(public readonly page: Page) {}

  successMsg = this.page.locator('text=Your purchase is ready to be downloaded.');
  license = this.page.locator('dt:has-text("License")');
  monthlyPriceDetails = this.page.locator('dd:has-text("12 * £20 (£240)")');
  singlePriceDetails = this.page.locator('dd:has-text("£220")');
  downloadBtn = this.page.locator('a:has-text("Download")');
}
