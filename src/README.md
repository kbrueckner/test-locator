# Test-Locator
When writing automatted UI regression tests with i.e. Playwright, Cypress or Selenium one of the first challenges to be addressed is: what locator strategy and format to use.

This util aims to help you to tackle this challenge. It generates locators in a style inspired by the [BEM methodology](http://getbem.com/). The advantage is that it can be used in any kind of HTML element attribute such as id, class or data-*.

## Instalation

```
npm install --save test-locator
```

## Usage

test-locator allows you to create simple locators, locators with block context and locators with element type definitions.

React Example:

```js
import locator from 'test-locator';

...

<ul id={locator('my-list')}>
    <li className={locator(['my-list', 'list-item'])}>
        <button className={locator(['my-list', 'list-item', 'action'], 'button')}>Test</button>
    </li>
</ul>

...
```

will result in 

```html
...

<ul id="my-list">
    <li className="my-list__list-item">
        <button className="my-list__list-item__action--button">Test</button>
    </li>
</ul>

...
```
