/* eslint-env jest */

import locator, { format, ELEMENT_TYPE } from './index';

describe('test-locator', () => {
    describe('format', () => {
        test('to lowercase', () => {
            expect(format('CaMeLcAsE')).toEqual('camelcase');
        });

        test('replace whitespaces', () => {
            expect(format('my test  string')).toEqual('my-test-string');
        });
    });

    describe('locator', () => {
        test('simple locator', () => {
            expect(locator('my-locator')).toEqual('my-locator');
        });

        test('chained locator', () => {
            expect(locator(['container', 'my-locator'])).toEqual('container__my-locator');
        });

        test('simple locator with element type', () => {
            expect(locator('my-locator', 'button')).toEqual('my-locator--button');
            expect(locator('my-locator', ELEMENT_TYPE.BUTTON)).toEqual(`my-locator--${ELEMENT_TYPE.BUTTON}`);
        });

        test('chained locator with element type', () => {
            expect(locator(['container', 'my-locator'], 'button')).toEqual('container__my-locator--button');
        });
    });
});
