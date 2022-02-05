import { expect, test } from '@playwright/test';
import { signIn } from '../helpers/sign-in.helper';
import { MainPage } from '../pages/main.page';
import { SignInDialog } from '../pages/sign-in.dialog';
import { TempEmail } from '../pages/temp-email.page';

test.describe('Sign in', async () => {
  test('Sign in dialog elements validation', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.signInBtn.click();

    const signInDialog = new SignInDialog(page);
    await expect(signInDialog.emailInput).toBeVisible();
    await expect(signInDialog.loginWithEmailBtn).toBeVisible();
    await expect(signInDialog.loginWithGoogle).toBeVisible();
  });

  test('Sign in with MagicLink', async ({ page }) => {
    const email = await signIn(page);
    await expect(page.locator(`text=${email}`)).toBeVisible();
  });

  test.skip('Sign in', async ({ page }) => {
    const context = page.context();
    const emailPage = await context.newPage();
    const tempEmailPage = new TempEmail(emailPage);
    await tempEmailPage.goto();

    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.signInBtn.click();

    const signInDialog = new SignInDialog(page);
    await signInDialog.emailInput.fill(await tempEmailPage.getTempEmail());
    await signInDialog.loginWithEmailBtn.click();

    await tempEmailPage.emailTitle.waitFor();
    await page.pause();
    await tempEmailPage.emailTitle.click();
    const signInLinkEl = tempEmailPage.emailFrame.locator('a:text("Sign in")');
    const link = await signInLinkEl.getAttribute('href');

    await page.goto(link);
  });
});
