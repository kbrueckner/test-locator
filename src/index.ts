type ElementType = 'button' | 'input' | 'select' | 'list' | 'listitem' | 'flyout' | 'overlay' | 'title' | 'page';

export default (identifier: string | string[], elementType?: ElementType): string => {
    const identifiers = Array.isArray(identifier) ? identifier : [identifier];
    return `${identifiers.join('__')}${elementType ? `--${elementType}` : ''}`;
};
