import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
test
export class HomePage extends BasePage {
  logoImg = "xpath=//img[@alt='Website for automation practice']";
  homeLink = this.page.getByRole('link', { name: 'Home' });
   productLink = this.page.getByRole('link', { name: 'Products' });
    cartLink = this.page.getByRole('link', { name: 'Cart' });
     signUpLink = this.page.getByRole('link', { name: 'Signup / Login' });
       testCases = this.page.getByRole('link', { name: ' Test Cases', exact: true });
       //APITesting = this.page.getByRole('link', { name: ' API Testing', exact: true });
        APITesting = this.page.getByRole('link', { name: /API Testing/i }).first();
        videoTutorialsLink = this.page.getByRole('link', { name: ' Video Tutorials' });
         contactUsLink = this.page.getByRole('link', { name: 'Contact us' });



async verifyLogoIsVisible(): Promise<void> {
    await expect(this.page.locator(this.logoImg)).toBeVisible();
  }

  async verifyHomeLinkIsVisible(): Promise<void> {
    await expect(this.homeLink).toBeVisible();
    console.log('Home link is visible');
  }

  async verifyProductLinkIsVisible(): Promise<void> {
    await expect(this.productLink).toBeVisible();
    console.log('Product link is visible');
  }
async verifyCartLinkIsVisible(): Promise<void> {
    await expect(this.cartLink).toBeVisible();
    console.log('Cart link is visible');
  } 

  async verifySignUpLinkIsVisible(): Promise<void> {



    await expect(this.signUpLink).toBeVisible();
    console.log('SignUp link is visible');
  }

    async verifyTestCasesLinkIsVisible(): Promise<void> {   
        await expect(this.testCases).toBeVisible();
        console.log('Test Cases link is visible');
    }   

    async verifyAPITestingLinkIsVisible(): Promise<void> {
        await expect(this.APITesting).toBeVisible();
        console.log('API Testing link is visible');
    }   

    async verifyVideoTutorialsLinkIsVisible(): Promise<void> {
        await expect(this.videoTutorialsLink).toBeVisible();
        console.log('Video Tutorials link is visible');
    }       

    async verifyContactUsLinkIsVisible(): Promise<void> {
        await expect(this.contactUsLink).toBeVisible();
        console.log('Contact Us link is visible');
    }


}
