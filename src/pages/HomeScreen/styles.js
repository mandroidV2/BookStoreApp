import { MARGIN_16 } from "@styles/margins";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: MARGIN_16, 
    },
    actionButton: {
        marginVertical: MARGIN_16,
    },
    actionBtnTitleStype: {
        fontSize: 18,
    }
});
