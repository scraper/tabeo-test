import test, { expect } from '@playwright/test';
import { signIn } from '../helpers/sign-in.helper';
import { MainPage } from '../pages/main.page';
import { CheckoutPage } from '../pages/stripe/checkout.page';
import { ThankYouPage } from '../pages/thank-you.page';

test.describe('Buy icons', async () => {
  test('Pay monthly with valid payment details', async ({ page }) => {
    await signIn(page);

    const mainPage = new MainPage(page);
    await mainPage.payMonthlyBtn.click();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.waitToLoad();
    await checkoutPage.enterCardDetails('4000002760003184');

    const thankYouPage = new ThankYouPage(page);
    await expect(thankYouPage.successMsg).toBeVisible();
    await expect(thankYouPage.license).toBeVisible();
    await expect(thankYouPage.monthlyPriceDetails).toBeVisible();
    await expect(thankYouPage.downloadBtn).toBeVisible();
  });
  test('Pay yearly with valid payment details', async ({ page }) => {
    await signIn(page);

    const mainPage = new MainPage(page);
    await mainPage.payOnce.click();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.waitToLoad();
    await checkoutPage.enterCardDetails('4000002760003184');

    const thankYouPage = new ThankYouPage(page);
    await expect(thankYouPage.successMsg).toBeVisible();
    await expect(thankYouPage.license).toBeVisible();
    await expect(thankYouPage.singlePriceDetails).toBeVisible();
    await expect(thankYouPage.downloadBtn).toBeVisible();
  });

  test('Pay yearly with invalid payment details', async ({ page }) => {
    await signIn(page);

    const mainPage = new MainPage(page);
    await mainPage.payOnce.click();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.waitToLoad();
    await checkoutPage.enterCardDetails('4000008260003178');
    await checkoutPage.cardDeclinedErrMsg.waitFor();
    await expect(checkoutPage.cardDeclinedErrMsg).toBeVisible();
  });
});
