import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { decrypt, encrypt } from '../../utils/cryptoUtil';

export class LoginPage extends BasePage {
  // Locators
  readonly usernameInput = '[data-qa="login-email"]';
  readonly passwordInput = '[data-qa="login-password"]';
  readonly loginButton = '[data-qa="login-button"]';
  readonly errorMessage = 'xpath=//p[text()="Your email or password is incorrect!"]';
  readonly forgotPasswordLink = 'a:has-text("Forgot Password")';
  




 /**
   * Navigate to login page
   */
  async launch(url: string): Promise<void> {
    await super.launch(url);
    await this.page.context().browser()?.contexts()[0].pages()[0].evaluate(() => window.moveTo(0, 0));
    await this.page.context().browser()?.contexts()[0].pages()[0].evaluate(() => window.resizeTo(window.screen.width, window.screen.height));
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Login with username and password
   */
  async goIn(): Promise<void> {
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();
    await this.page.waitForURL('**/login', { timeout: 10000 });
    await this.page.waitForSelector(this.usernameInput, { state: 'visible', timeout: 10000 });
  }

  async login(username: string, password: string): Promise<void> {
    await this.goto('https://automationexercise.com/');
    await this.goIn();
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  encryptPassword(password: string): string {
    return encrypt(password);
  }

  decryptPassword(encryptedPassword: string): string {
    return decrypt(encryptedPassword);
  }

  async loginWithEncryptedPassword(username: string, encryptedPassword: string): Promise<void> {
    const password = this.decryptPassword(encryptedPassword);
    await this.goIn();
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async loginWithEnvCredentials(): Promise<void> {
    const username = process.env.USERNAME || 'testuser';
    const encryptedPassword = process.env.ENCRYPTED_PASSWORD || '';
    const password = this.decryptPassword(encryptedPassword);
    await this.goto('https://automationexercise.com/');
    await this.page.waitForLoadState('networkidle');
    await this.goIn();
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async verifyErrorMsg(): Promise<void> {
    await this.page.locator(this.errorMessage).isVisible();
  }


 





}