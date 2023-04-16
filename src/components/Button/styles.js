import { lightBlue, white } from "@styles/colors";
import { MARGIN_12, MARGIN_16, MARGIN_24 } from "@styles/margins";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: lightBlue,
        paddingVertical: MARGIN_16,
        paddingHorizontal: MARGIN_24,
    },
    titleText: {
        color: white,
    }
});
