import { test, expect } from '../src/pages/Fixtures';
//import { logger } from '../utils/logger';
import testData from './data/testData.json';

test('Verify log out link', async ({ page, logOutPage }) => {
 // await page.goto("https://automationexercise.com/");
  await logOutPage.verifyLogOutLinkIsVisible();
});