import { test, expect } from '@playwright/test';
import { ContactPage } from '@pages/contact.page';
import { generateRandomString } from '@helpers/randomText';

let contactPage: ContactPage;


test.beforeEach(async ({ page }) => {
  contactPage = new ContactPage(page);
  contactPage.goto();
});

test.describe('Validte contact form', () => {
  test('Validate UI elements are visible', async ({ page }) => {
    await expect(contactPage.contactHeading).toHaveText('Contact');
    await expect(page.getByText('First name')).toBeVisible();
    await expect(page.getByText('Last name')).toBeVisible();
    await expect(page.getByText('Email address')).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toBeVisible();
    await expect(page.getByText('Subject', {exact: true})).toHaveText('Subject');
    await expect(page.getByText('Message *')).toBeVisible();
    await expect(page.getByText('Attachment')).toBeVisible();
  });

  test('Validate placeholder texts', async ({ page }) => {
    await expect(contactPage.firstNameTextbox).toHaveAttribute('placeholder', 'Your first name *');
    await expect(contactPage.lastNameTextbox).toHaveAttribute('placeholder', 'Your last name *');
    await expect(contactPage.emailTextbox).toHaveAttribute('placeholder', 'Your email *');
    //await expect(page.getByText('Select a subject *')).toBeVisible();
    //await expect(page.locator('[data-test="subject"]')).toHaveAttribute('placeholder', 'Select a subject *');
  });
});

test.describe('Test form validations', () => {
  test('Test mandatory text fields sent empty', async ({ page }) => {
    await contactPage.sendButton.click();
    await expect(contactPage.firstNameMandatory).toBeVisible();
    await expect(contactPage.lastNameMandatory).toBeVisible();
    await expect(contactPage.emailMandatory).toBeVisible();
    await expect(contactPage.subjectMandatory).toBeVisible();
    await expect(contactPage.messageMandatory).toBeVisible();
  });

  test('Test invalid email format', async ({ page }) => {
    const invalidEmail = generateRandomString(7);
    await contactPage.emailTextbox.fill(invalidEmail);
    await contactPage.sendButton.click();
    await expect(page.getByText('Email format is invalid')).toBeVisible();
  });

  test('Too short message', async ({ page }) => {
    const shortMessage = generateRandomString(49);
    await contactPage.messageTextbox.fill(shortMessage);
    await contactPage.sendButton.click();
    await expect(page.getByText('Message must be minimal 50 characters')).toBeVisible();
  });

  test('Too long message', async ({ page }) => {
    const longMessage = generateRandomString(251);
    const goodInput = generateRandomString(8);
    await contactPage.firstNameTextbox.fill(goodInput);
    await contactPage.lastNameTextbox.fill(goodInput);
    await contactPage.emailTextbox.fill("test@test.ji");
    contactPage.selectAnOption();
    await contactPage.messageTextbox.fill(longMessage);
    await contactPage.sendButton.click({ timeout: 500 });
    await expect(page.getByText('The message field must not be greater than 250 characters.')).toBeVisible();
  });  
});

test.describe('Validate positive user flows', () => {
 
  test('Submit without attachment', async ({ page }) => {
    const longMessage = generateRandomString(51);
    const goodInput = generateRandomString(5);
    await contactPage.firstNameTextbox.fill(goodInput);
    await contactPage.lastNameTextbox.fill(goodInput);
    await contactPage.emailTextbox.fill("test@test.ji");
    contactPage.selectAnOption();
    await contactPage.messageTextbox.fill(longMessage);
    await contactPage.sendButton.click({ timeout: 1000 });
    await expect(page.getByText("Thanks for your message! We will contact you shortly.")).toBeVisible();
  });  
});



