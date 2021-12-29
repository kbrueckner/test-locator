# Test-Locator
When writing automatted UI regression tests with i.e. Playwright, Cypress or Selenium one of the first challenges to be addressed is: what locator strategy and format to use.

This util aims to help you to tackle this challenge. It generates locators in a style inspired by the [BEM methodology](http://getbem.com/) as described in the locator strategy guide which can be found [here](https://github.com/kbrueckner/test-locator-strategy). The advantage of those locators is that they can be used in any kind of HTML element attribute such as id, class or data-*. Since the locators follow the rules of CSS selector definitions you can also simple use them to create BEM class names for your CSS definitions.

## Installation

```
npm install --save test-locator
```

## Usage

test-locator allows you to create simple locators, locators with block context and locators with element type definitions.

|Attribute|Mandatory|Type|Description|
|---|---|---|---|
|identifier|x|string \| string[]|Identifier defined as simple string or array of strings for block scoped identifiers|
|elementType|-|string?|Element type i.e. button or input. Either defined as free text or by usage of the package constant ELEMENT_TYPE|

React Example:

```js
import locator, { ELEMENT_TYPE } from 'test-locator';

...

<ul id={locator('my-list')}>
    <li className={locator(['my-list', 'list-item'])}>
        <span data-test-locator={locator(['my-list', 'list-item', 'action'], 'text')}>Test Text</span>
        <button data-test-locator={locator(['my-list', 'list-item', 'action'], ELEMENT_TYPE.BUTTON)}>Test Button</button>
    </li>
</ul>

...
```

will result in 

```html
...

<ul id="my-list">
    <li className="my-list__list-item">
        <span data-test-locator="my-list__list-item__action--text">Test Text</span>
        <button data-test-locator="my-list__list-item__action--button">Test Button</button>
    </li>
</ul>

...
```
