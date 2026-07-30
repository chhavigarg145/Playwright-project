
import { test, expect } from '../src/pages/Fixtures';
//import { logger } from '../utils/logger';
import testData from './data/testData.json';

const signUpusername = testData.signup.username;
const signUpEmail = testData.signup.email;
const signUpTitle = testData.signup.title;
const signUpPassword = testData.signup.password;
const signUpDay = testData.signup.day;
const signUpMonth = testData.signup.month;
const signUpYear = testData.signup.year;
const signUpFirstName = testData.signup.firstName;
const signUpLastName = testData.signup.lastName;
const signUpCompany = testData.signup.company;
const signUpAddress = testData.signup.address;
const signUpAddress2 = testData.signup.address2;
const signUpState = testData.signup.state;
const signUpCity = testData.signup.city;
const signUpZipcode = testData.signup.zipcode;
const signUpMobileNumber = testData.signup.mobileNumber;



 

  
test('sign up test', async ({page, signUpPage }) => {
 await page.goto("https://automationexercise.com/");
 await signUpPage.verifySignUpLinkIsVisible();
  await signUpPage.clickSignUpLink();
  const uniqueEmail = testData.signup.email.replace('@example.com', `+${Date.now()}@example.com`);
  await signUpPage.signUpWithEmail(signUpusername, uniqueEmail);
  await signUpPage.signupDetails(
    signUpTitle,
    signUpPassword,
    signUpDay,
    signUpMonth,
    signUpYear,
    signUpFirstName,
    signUpLastName,
    signUpCompany,
    signUpAddress,
    signUpAddress2,
    signUpState,
    signUpCity,
    signUpZipcode,
    signUpMobileNumber
  );
  await signUpPage.accountCreatedMessageIsVisible();
  await signUpPage.verifyLoggedInAs(signUpusername);
  console.log('Sign up test completed successfully');
});


