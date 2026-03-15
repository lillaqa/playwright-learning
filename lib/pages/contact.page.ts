import { expect, Page, Locator } from '@playwright/test';

export class ContactPage {
    //variables
    readonly page: Page;
    readonly contactHeading: Locator;
    readonly contactForm: Locator;
    readonly firstNameTextbox: Locator;
    readonly lastNameTextbox: Locator;
    readonly emailTextbox: Locator;
    readonly messageTextbox: Locator;
    readonly sendButton: Locator;
    readonly firstNameMandatory: Locator;
    readonly lastNameMandatory: Locator;
    readonly emailMandatory: Locator;
    readonly subjectMandatory: Locator;
    readonly messageMandatory: Locator;


    //constructors
    constructor(page) {
        this.page = page;
        this.contactHeading = page.getByRole('heading', { name: 'Contact' });
        this.contactForm = page.locator('form');
        this.firstNameTextbox = page.getByRole('textbox', { name: 'First name' });
        this.lastNameTextbox = page.getByRole('textbox', { name: 'Last name' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email address' });
        this.messageTextbox = page.getByRole('textbox', { name: 'Message *'});
        this.sendButton = page.locator('[data-test="contact-submit"]');
        this.firstNameMandatory = page.getByText('First name is required');
        this.lastNameMandatory = page.getByText('Last name is required');
        this.emailMandatory = page.getByText('Email is required');
        this.subjectMandatory = page.getByText('Subject is required');
        this.messageMandatory = page.getByText('Message is required');
    }


    //methods
    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/contact');
    }
}

export default ContactPage;

/* collection of elements 
await expect(page.locator('form')).toMatchAriaSnapshot(`
    - text: First name
    - textbox "First name":
      - /placeholder: Your first name *
    `);

<input type="submit" data-test="contact-submit" class="btnSubmit" value="Send">

  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - text: Last name
    - textbox "Last name":
      - /placeholder: Your last name *
    `);


  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - text: Email address
    - textbox "Email address":
      - /placeholder: Your email *
    `);
});
  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - text: Subject
    - combobox "Subject":
      - option "Customer service"
      - option "Webmaster"
      - option "Return"
      - option "Payments"
      - option "Warranty"
      - option "Status of my order"
    `);
});

  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - text: Attachment
    - button "Attachment"
    - text: Only files with the
    - strong: txt
    - text: /extension are allowed, and files must be [\\d,.]+[bkmBKM]+\\./
    `);
locator('[data-test="contact-submit"]')

*/