import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }


  /**
   * Navigate to a specific URL
   */
  async launch(url: string): Promise<void> {
    await this.page.goto(url);
  }
  /**
   * Fill an input using a selector or locator
   */
  async fill(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
   // logger.info(`Filled input ${selector} with value: ${value}`);
  }

  /**
   * Select a radio button by value
   */
  async selectRadio(selector: string, value: string): Promise<void> {
    const radioByLabel = this.page.getByLabel(value).first();
    if (await radioByLabel.count() > 0) {
      await radioByLabel.waitFor({ state: 'visible', timeout: 10000 });
      await radioByLabel.check();
      return;
    }

    const radio = this.page.locator(`${selector}[value="${value}"]`).first();
    await radio.waitFor({ state: 'visible', timeout: 10000 });
    await radio.check();
  }

  /**
   * Select an option from a dropdown
   */
  async selectOption(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).selectOption(value);
  }

  /**
   * Click an element using a selector or locator
   */
  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }
}