// string interpolation
export const stringInterpolate = (str = '', obj = {}) => str.replace(
    /{([^{}]*)}/g,
    (rawString, key) => (typeof rawString === 'string' && typeof obj === 'object' ? obj[key] : rawString),
);
