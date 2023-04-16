import _head from 'lodash/head';

import { EMPTY_OBJECT } from "@constants/app.constants";
import { BOOK_COVER_SIZE, COVER_IMAGE_BASE_URL } from "./book.constants";
import BookReader from "./book.reader";

const getCoverUrlGenerator = (key, value, size) => {
    return `${COVER_IMAGE_BASE_URL}/${key}/${value}-${size}.jpg?default=false`;
}

export const getCoverImageUrl = (book = EMPTY_OBJECT, size = BOOK_COVER_SIZE.S) => {
    // get cover url based on ID and ISBN (TODO: It can also be fetched via OCLC, LCCN, OLID)
    const coverId = BookReader.coverId(book);
    if (coverId) {
        return getCoverUrlGenerator('id', coverId, size);
    }
    const firstIsbnValue = _head(BookReader.isbn(book));
    return getCoverUrlGenerator('isbn', firstIsbnValue, size);
};
