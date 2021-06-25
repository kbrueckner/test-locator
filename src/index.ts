type ElementType = 'button' | 'input' | 'select' | 'list' | 'listitem' | 'flyout'
                   | 'overlay' | 'title' | 'page' | 'drag' | 'drop';

export const format = (identifier: string): string => identifier.toLowerCase().replace(/\s+/ig, '-');

export default (identifier: string | string[], elementType?: ElementType): string => {
    const identifiers = Array.isArray(identifier) ? identifier : [identifier];
    return `${
        identifiers
            .map((entry) => format(entry))
            .join('__')
    }${elementType ? `--${elementType}` : ''}`;
};
