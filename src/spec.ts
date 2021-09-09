// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
    beforeEach(() => {
        browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', () => {
        element(by.model('yourName')).sendKeys('Julie');
        let greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual(Promise.resolve('Hello Julie!'));
    });

    it('should list todos', function() {
        let todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(Promise.resolve(2));
        expect(todoList.get(1).getText()).toEqual(Promise.resolve('build an AngularJS app'));
    });
});
