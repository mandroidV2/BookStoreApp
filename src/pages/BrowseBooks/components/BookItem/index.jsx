import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import _head from 'lodash/head';
import { useNavigation } from '@react-navigation/native';

import BookReader from '@shared/book/book.reader';
import { getCoverImageUrl } from '@shared/book/book.helper';
import { BOOK_COVER_SIZE } from '@shared/book/book.constants';
import withActionHandlers from '@connectors/withActionHandlers';
import { ACTION_HANDLERS } from './BookItem.actionHandlers';
import { ACTION_TYPES } from './BookItem.actionTypes';
import { Routes } from '@navigator/routeNames';
import { EMPTY_OBJECT } from '@constants/app.constants';
import styles from './styles';

const defaultImage = require('@assets/images/book_placeholder.png');

const BookItem = ({ book, coverFailedToLoad, onAction }) => {
    const navigation = useNavigation();

    const title = BookReader.title(book);
    const authorName = _head(BookReader.authorNames(book));

    const handleCoverImageLoadError = useCallback(() => {
        onAction({
            type: ACTION_TYPES.ON_COVER_IMAGE_LOAD_ERROR,
        });
    }, [onAction]);

    const handleBookItemClicked = () => {
        navigation.navigate(Routes.bookDetails, {
            book,
        });
    };

    return (
        <TouchableOpacity onPress={handleBookItemClicked}>
            <View style={styles.container}>
                <Image
                    defaultSource={defaultImage}
                    // source={coverFailedToLoad ? defaultImage:  { uri: getCoverImageUrl(book, BOOK_COVER_SIZE.M) }}
                    source={{ uri: getCoverImageUrl(book, BOOK_COVER_SIZE.M) }}

                    style={styles.image}
                    resizeMode="contain"
                    onError={handleCoverImageLoadError}
                />
                <View style={styles.bookInformationContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.authorText}>{`by ${authorName}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


BookItem.propTypes = {
    book: PropTypes.object,
    coverFailedToLoad: PropTypes.bool,
    onAction: PropTypes.func,
};

BookItem.defaultProps = {
    book: EMPTY_OBJECT,
    coverFailedToLoad: true,
    onAction: _noop,
};

export default withActionHandlers(ACTION_HANDLERS, {
    coverFailedToLoad: false,
})(BookItem);
