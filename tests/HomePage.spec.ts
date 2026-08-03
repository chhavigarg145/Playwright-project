import { test, expect } from '../src/pages/Fixtures';
//import { logger } from '../utils/logger';
import testData from './data/testData.json';

test('Verify links', async ({ page, homePage }) => {
  await page.goto("https://automationexercise.com/");
  await homePage.verifyLogoIsVisible();
  await homePage.verifyHomeLinkIsVisible();
  await homePage.verifyProductLinkIsVisible();
  await homePage.verifyCartLinkIsVisible();
  await homePage.verifySignUpLinkIsVisible();
  await homePage.verifyTestCasesLinkIsVisible();
  await homePage.verifyAPITestingLinkIsVisible();
  await homePage.verifyVideoTutorialsLinkIsVisible();
  await homePage.verifyContactUsLinkIsVisible();12323f
   await homePage.verifyContactUsLinkIsVisible();12323f update to test rebase
   added
   
  
});