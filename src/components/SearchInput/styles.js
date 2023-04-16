import { grey } from "@styles/colors";
import { MARGIN_8 } from "@styles/margins";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerStyles: {
        padding: MARGIN_8,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: grey,
        borderRadius: 10,
        alignItems: 'center',
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginHorizontal: MARGIN_8,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        height: Platform.select({
            ios: 30,
            android: 40,
        }),
    }
});
