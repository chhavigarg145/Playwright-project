import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LogOutPage extends BasePage {
    
      logOutLink = this.page.getByRole('link', { name: 'Logout' });




async verifyLogOutLinkIsVisible(): Promise<void> {
    await expect(this.logOutLink).toBeVisible();
    console.log('LogOut link is visible');
  }

  async clickLogOutLink(): Promise<void> {
   await this.click(this.logOutLink);
    console.log('Clicked on LogOut link');
 }
}
