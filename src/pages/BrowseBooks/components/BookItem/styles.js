import { StyleSheet } from "react-native";

import { black, darkGrey, white } from "@styles/colors";
import { MARGIN_16, MARGIN_4 } from "@styles/margins";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: white,
        padding: MARGIN_16,
    },
    image: {
        width: 90,
        height: 120,
        borderRadius: 2,
    },
    bookInformationContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: MARGIN_16,
    },
    titleText: {
        fontSize: 20,
        marginVertical: MARGIN_4,
        color: black,
    },
    authorText: {
        fontSize: 16,
        color: darkGrey,
    }
});
