import { grey, white } from "@styles/colors";
import { MARGIN_12, MARGIN_16 } from "@styles/margins";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    searchInputContainer: {
        padding: MARGIN_12,
        backgroundColor: white
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginVertical: MARGIN_16,
        marginHorizontal: MARGIN_12,
    },
    footerText: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: MARGIN_12,
    },
    emptyText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noData: {
        fontSize: 20,
    },
    itemSeperatorStyle: {
        height: 1,
        backgroundColor: grey,
    }
});
