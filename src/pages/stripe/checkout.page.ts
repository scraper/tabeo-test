import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(public readonly page: Page) {}
  url = 'https://checkout.stripe.com';
  price = this.page.locator('//div[contains(@class,"ProductSummaryTotalAmount")]');
  emailInput = this.page.locator('[class="ReadOnlyFormField-title"]');
  cardInput = this.page.locator('[id="cardNumber"]');
  cardExpiry = this.page.locator('[id="cardExpiry"]');
  cardCvc = this.page.locator('[id="cardCvc"]');
  billingName = this.page.locator('[id="billingName"]');
  subscribeBtn = this.page.locator('//button[contains(@class,"SubmitButton")]');
  cardDeclinedErrMsg = this.page.locator('[role="alert"]:has-text("Your card has been declined.")');

  firstFrame = this.page.locator('iframe >> nth=0');
  secondFrame = this.page.frameLocator('iframe >> nth=0').locator('[id="challengeFrame"]');
  dSecureFrame = this.page
    .frameLocator('iframe >> nth=0')
    .frameLocator('[id="challengeFrame"]')
    .locator('//iframe[@class="FullscreenFrame"]');

  completeAuthBtn = this.page
    .frameLocator('iframe >> nth=0')
    .frameLocator('[id="challengeFrame"]')
    .frameLocator('//iframe[@class="FullscreenFrame"]')
    .locator('text=Complete authentication');
  // .frameLocator('//iframe[@class="FullscreenFrame"]')

  failAuthBtn = this.page
    .frameLocator('//iframe[@class="FullscreenFrame"]')
    .locator('[id="test-source-fail-3ds"]');

  async waitToLoad() {
    await this.page.waitForURL(`${this.url}/**`);
  }

  async enterCardDetails(
    cardNum: string,
    cardExpiry = '1225',
    cardCvc = '123',
    billingName = 'Test Tester'
  ) {
    await this.cardInput.fill(cardNum);
    await this.cardExpiry.fill(cardExpiry);
    await this.cardCvc.fill(cardCvc);
    await this.billingName.fill(billingName);
    await this.subscribeBtn.click();
    // await this.page.pause();

    // await this.page.waitForNavigation({ waitUntil: 'networkidle' });
    await this.firstFrame.waitFor();
    await this.secondFrame.waitFor();
    await this.dSecureFrame.waitFor();
    await this.completeAuthBtn.waitFor();
    await this.completeAuthBtn.click();
  }
}
