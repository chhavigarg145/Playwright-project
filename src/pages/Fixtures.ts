import { test as base, Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { HomePage } from './HomePage';
import { Product } from './Product';
import { LogOutPage } from './LogOutPage';
//import { logger } from '../utils/logger';

/**
 * Define custom fixtures for tests
 */
type TestFixtures = {
  loginPage: LoginPage;
  signUpPage: SignUpPage;
  homePage: HomePage;
  product: Product;
  logOutPage: LogOutPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
   // logger.info('Creating LoginPage fixture');
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  signUpPage: async ({ page }: { page: Page }, use: (value: SignUpPage) => Promise<void>) => {
    // logger.info('Creating SignUpPage fixture');
    const signUpPage = new SignUpPage(page);
    await use(signUpPage);
  },

  homePage: async ({ page }: { page: Page }, use: (value: HomePage) => Promise<void>) => {
    // logger.info('Creating HomePage fixture');
    const homePage = new HomePage(page);
    await use(homePage);
  },

  product: async ({ page }: { page: Page }, use: (value: Product) => Promise<void>) => {
    // logger.info('Creating Product fixture');
    const product = new Product(page);
    await use(product);
  },

  logOutPage: async ({ page }: { page: Page }, use: (value: LogOutPage) => Promise<void>) => {
    // logger.info('Creating LogOutPage fixture');
    const logOutPage = new LogOutPage(page);
    await use(logOutPage);
  }
});

export { expect } from '@playwright/test';
