import { test, expect } from '../src/pages/Fixtures';
//import { logger } from '../utils/logger';
import testData from './data/testData.json';

const username = testData.login.username;
const password = testData.login.password;

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ loginPage: page }) => {
    // logger.info('Navigating to login page');
    await page.launch("https://automationexercise.com/");
  });

 

  
test('login test', async ({ loginPage }) => {
 /// await loginPage.goto('/login');
  //await loginPage.login('chhavi.garg@example.com', 'password123');
  await loginPage.login(username, password);
  await loginPage.verifyErrorMsg();
  console.log('Login test completed successfully');
});
  

test('login with env credentials test', async ({ loginPage }) => {
  await loginPage.loginWithEnvCredentials();
  console.log('Login with env credentials test completed successfully');
});

});