import React from "react";
import PropTypes from 'prop-types';
import { Text, View } from "react-native";
import { Routes } from '@navigator/routeNames';
import Button from '@components/Button';
import { BROWSE_BOOK_BY } from "@shared/book/book.constants";
import { EMPTY_OBJECT } from "@constants/app.constants";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {

    const onPress = (browseBooksBy) => {
        navigation.navigate(Routes.browseBooks, {
            browseBooksBy,
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Book Shop</Text>
            <Button
                buttonStyle={styles.actionButton}
                titleStyle={styles.actionBtnTitleStype}
                title="Browse Books By Title"
                onPress={() => onPress(BROWSE_BOOK_BY.TITLE)}
            />
            <Button
                buttonStyle={styles.actionButton}
                titleStyle={styles.actionBtnTitleStype}
                title="Browse Books By Author"
                onPress={() => onPress(BROWSE_BOOK_BY.AUTHOR)}
            />
        </View>
    )
};

HomeScreen.propTypes = {
    navigation: PropTypes.object,
};

HomeScreen.defaultProps = {
    navigation: EMPTY_OBJECT,
};

export default HomeScreen;
