import { BROWSE_BOOK_BY } from "@shared/book/book.constants"

export const getQStringForBookList = (browseBooksBy, searchText) => {
    if (browseBooksBy === BROWSE_BOOK_BY.TITLE) {
        return `title:${searchText}`;
    } else  if (browseBooksBy === BROWSE_BOOK_BY.AUTHOR) {
        return `author:${searchText}`;
    } else {
        return searchText;
    }
};
