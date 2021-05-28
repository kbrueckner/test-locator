/* eslint-env jest */

import locator from './index';

describe('risk test-locator', () => {
    test('simple locator', () => {
        expect(locator('my-locator')).toEqual('my-locator');
    });

    test('chained locator', () => {
        expect(locator(['container', 'my-locator'])).toEqual('container__my-locator');
    });

    test('simple locator with element type', () => {
        expect(locator('my-locator', 'button')).toEqual('my-locator--button');
    });

    test('chained locator with element type', () => {
        expect(locator(['container', 'my-locator'], 'button')).toEqual('container__my-locator--button');
    });
});
