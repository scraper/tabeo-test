import { Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { SignInDialog } from '../pages/sign-in.dialog';
import { TempEmail } from '../pages/temp-email.page';

export const signIn = async (page: Page) => {
  const context = page.context();
  const emailPage = await context.newPage();
  const tempEmailPage = new TempEmail(emailPage);
  await tempEmailPage.goto();
  const email = await tempEmailPage.getTempEmail();

  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.signInBtn.click();

  const signInDialog = new SignInDialog(page);
  await signInDialog.emailInput.fill(email);
  await signInDialog.loginWithEmailBtn.click();

  await tempEmailPage.emailTitle.waitFor();
  await tempEmailPage.emailTitle.click();
  const signInLinkEl = emailPage.locator('a:text("Sign in")');
  const link = await signInLinkEl.getAttribute('href');

  await emailPage.close();
  await page.goto(link);
  return email;
};
