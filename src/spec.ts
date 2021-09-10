// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import { browser, by, element } from 'protractor';

describe('protractor with typescript typings', () => {
    // TODO move the line below to a config file
    const BASE_URL = 'https://app.yanport.com';
    const USERNAME = 'e2e-user';
    const PASSWORD = 'e2ePassword';

    beforeEach(() => {
        browser.get(BASE_URL);
    });

    it('should logged successfully', async () => {
        // Given
        element(by.css("input[formControlName=username]")).sendKeys(USERNAME);
        element(by.css("input[formControlName=password]")).sendKeys(PASSWORD);

        // When
        element(by.css('form')).submit();

        // Then
        const usernameElement = element(by.className('username'));
        expect(await usernameElement.getText()).toBe('2end End');
    });

    it('should go to search module', async () => {
        // Given
        // When
        // Then
        const usernameElement = element(by.className('username'));
        expect(await usernameElement.getText()).toBe('must failed');
    });
});
