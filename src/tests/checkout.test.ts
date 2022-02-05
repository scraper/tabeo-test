import { test, expect } from '@playwright/test';
import { signIn } from '../helpers/sign-in.helper';
import { MainPage } from '../pages/main.page';
import { SignInDialog } from '../pages/sign-in.dialog';
import { CheckoutPage } from '../pages/stripe/checkout.page';

test.describe('Checkout', async () => {
  test('Get to checkout', async ({ page }) => {
    await signIn(page);

    const mainPage = new MainPage(page);
    await mainPage.payMonthlyBtn.click();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.waitToLoad();
    await expect(checkoutPage.price).toContainText('£20.00');
    await expect(checkoutPage.price).toContainText('per');
    await expect(checkoutPage.price).toContainText('month');
  });
  test('Get to checkout when not logged in', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.payMonthlyBtn.click();

    const signInDialog = new SignInDialog(page);
    await expect(signInDialog.emailInput).toBeVisible();
  });
});
