import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import PropTypes from 'prop-types';
import _head from 'lodash/head';
import _noop from 'lodash/noop';

import { BOOK_COVER_SIZE } from "@shared/book/book.constants";
import { getCoverImageUrl } from "@shared/book/book.helper";
import BookReader from "@shared/book/book.reader";
import { ACTION_TYPES } from "./BookDetails.actionTypes";
import withActionHandlers from "@connectors/withActionHandlers";
import { ACTION_HANDLERS } from "./BookDetails.actionHandlers";
import { EMPTY_OBJECT } from "@constants/app.constants";
import styles from "./styles";

const defaultImage = require('@assets/images/book_placeholder.png');

const BookDetails = ({ book, onAction }) => {

    const title = BookReader.title(book);
    const authorName = _head(BookReader.authorNames(book));
    const editionCount = BookReader.editionCount(book);

    useEffect(() => {
        // added `init` if any calls/setup are required on details page
        onAction({
            type: ACTION_TYPES.HANDLE_INIT,
        });
    }, [onAction]);

    return (
        <View style={styles.container}>
            <Image
                defaultSource={defaultImage}
                source={{ uri: getCoverImageUrl(book, BOOK_COVER_SIZE.L) }}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.bookInformationContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.authorText}>{`by ${authorName}`}</Text>
                <Text style={styles.editionCountText}>{`${editionCount} edition(s) found.`}</Text>
            </View>
        </View>
    )
};


BookDetails.propTypes = {
    book: PropTypes.object,
    onAction: PropTypes.func,
};

BookDetails.defaultProps = {
    book: EMPTY_OBJECT,
    onAction: _noop,
};

export default withActionHandlers(ACTION_HANDLERS, {
    book: EMPTY_OBJECT,
})(BookDetails);
