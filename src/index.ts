export const ELEMENT_TYPE = {
    BUTTON: 'button',
    SELECT: 'select',
    OPTION: 'option',
    INPUT: 'input',
    TITLE: 'title',
    TEXT: 'text',
    PAGE: 'page',
    AREA: 'area',
    FLYIN: 'flyin',
    OVERLAY: 'overlay',
    DRAGABLE: 'dragable',
    DROPAREA: 'droparea',
    LIST: 'list',
    LIST_ITEM: 'list-item',
};

export const format = (identifier: string): string => identifier.toLowerCase().replace(/\s+/ig, '-');

export default (identifier: string | string[], elementType?: string): string => {
    const identifiers = Array.isArray(identifier) ? identifier : [identifier];
    return `${
        identifiers
            .map((entry) => format(entry))
            .join('__')
    }${elementType ? `--${elementType}` : ''}`;
};
