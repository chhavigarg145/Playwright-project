import { BasePage } from './BasePage';
import { expect } from './Fixtures';

export class SignUpPage extends BasePage {

      signUpLink = this.page.getByRole('link', { name: 'Signup / Login' });
      signUpUsername = '[data-qa="signup-name"]';
       signUpEmail ='[data-qa="signup-email"]';
       signUpButton = '[data-qa="signup-button"]';
        readonly title = 'input[name="title"]';
    
  readonly password = 'input[id="password"]';
  readonly day = 'select[id="days"]';
  readonly month = 'select[id="months"]';
  readonly year = 'select[id="years"]';
   readonly firstName = 'input[id="first_name"]';
    readonly lastName = 'input[id="last_name"]';
     readonly company = 'input[id="company"]';
      readonly address = 'input[id="address1"]';
      readonly address2 = 'input[id="address2"]';
      readonly state = 'input[id="state"]';
      readonly city = 'input[id="city"]';
      readonly zipcode = 'input[id="zipcode"]';
         readonly mobileNumber = 'input[id="mobile_number"]';
  readonly createAccountButton = 'button[data-qa="create-account"]';
  AccountCreatedMessage = 'xpath=//h2[@data-qa="account-created"]/b';
  continueButton = 'a[data-qa="continue-button"]';

async accountCreatedMessageIsVisible(): Promise<void> {
 this.page.waitForSelector(this.AccountCreatedMessage, { state: 'visible', timeout: 10000 });
    await expect(this.page.locator(this.AccountCreatedMessage)).toBeVisible();
    await this.click(this.continueButton);
  }


 async signupDetails(titlename: string, password: string, day: string, month: string, year: string, firstName: string, lastName: string, company: string, address: string, address2: string, state: string, city: string, zipcode: string, mobileNumber: string): Promise<void> {
    await this.selectRadio(this.title, titlename); 
    
    await this.fill(this.password, password);
    
    await this.selectOption(this.day, day);
    
    await this.selectOption(this.month, month);
    
    await this.selectOption(this.year, year);
    await this.fill(this.firstName, firstName);
    await this.fill(this.lastName, lastName);
    await this.fill(this.company, company);
    await this.fill(this.address, address);
    await this.fill(this.address2, address2);
    await this.fill(this.state, state);
    await this.fill(this.city, city);
    await this.fill(this.zipcode, zipcode);
    await this.fill(this.mobileNumber, mobileNumber);
   
    await this.click(this.createAccountButton);
  }



      async verifySignUpLinkIsVisible(): Promise<void> {
        await expect(this.signUpLink).toBeVisible();
        console.log('SignUp link is visible');
      }

      async clickSignUpLink(): Promise<void> {
        await Promise.all([
          this.page.waitForURL('**/login', { timeout: 10000 }),
          this.signUpLink.click(),
        ]);
        console.log('Clicked on SignUp link');
      }

      async signUpWithEmail(username: string, email: string): Promise<void> {
        await this.fill(this.signUpUsername, username);
        await this.fill(this.signUpEmail, email);
        await Promise.all([
          this.page.waitForResponse(response => response.url().includes('/signup') && response.status() === 200),
          this.click(this.signUpButton),
        ]).catch(() => {});
        console.log(`Signed up with username: ${username} and email: ${email}`);
      }

       async verifyLoggedInAs(username?: string): Promise<void> {
    const locator = username
      ? this.page.getByText(new RegExp(`Logged in as\\s+${username}`), { exact: false })
      : this.page.getByText(/Logged in as/, { exact: false });
    await expect(locator).toBeVisible();
  }
}
