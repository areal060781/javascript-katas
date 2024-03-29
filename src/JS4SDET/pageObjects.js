/**
 * Organize a Page Object-like structure.
 * Page object definition:
 * - https://martinfowler.com/bliki/PageObject.html
 * - https://webdriver.io/docs/pageobjects/
 * - https://javascript.info/class-inheritance
 * Inctruction:
 * 1. LoginPage should be inherited from the BasePage
 * 2. BasePage should accept one argument 'url'
 * 3. LoginPage should use the parent constructor and extend it with one argument 'name'
 * 4. BasePage should have open() method that will get 'pageName' as a parameter
 * and return the string: "Open this ${this.url}/${pageName}"
 * 5. Login page should have open() method that will call the parent's open() method passing
 * 'this.name' as a parameter
 * 6. Component class should accept one argument 'type'
 * (will receive values such as 'footer' and 'header')
 * 7. BasePage should have getters 'footer()' and 'header()' that will return new Component
 * passing 'footer' and 'header' respectively ( e.g return new Component('footer') )
 * 8. Component should have review() method that will return the string "I can review ${this.type}"
 */

const { type } = require('os');

class BasePage {
  url = null;

  get footer() {
    return new Component('footer');
  }

  get header() {
    return new Component('header');
  }

  constructor(url) {
    this.url = url;
  }

  open(pageName) {
    return `Open this ${this.url}/${pageName}`;
  }
}

class LoginPage extends BasePage {
  name = null;

  constructor(url, name) {
    super(url);
    this.name = name;
  }

  open() {
    return super.open(this.name);
  }
}

class Component {
  type = null;

  constructor(type) {
    this.type = type;
  }

  review() {
    return `I can review ${this.type}`;
  }
}

module.exports = {
  BasePage,
  LoginPage,
  Component,
};