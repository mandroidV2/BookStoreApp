import _property from 'lodash/property';

const key = _property('key');
const title = _property('title');
const authorNames = _property('author_name');
const isbn = _property('isbn');
const coverId = _property('cover_i');
const editionCount = _property('edition_count');

export default {
    key,
    title,
    authorNames,
    isbn,
    coverId,
    editionCount,
};
