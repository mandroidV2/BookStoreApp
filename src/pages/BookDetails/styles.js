import { black, darkGrey, lightBlue, white } from "@styles/colors";
import { MARGIN_16, MARGIN_2, MARGIN_4 } from "@styles/margins";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: white,
        padding: MARGIN_16, 
        alignItems: 'center'
    },
    image: {
        width: 270,
        height: 360,
        borderRadius: 2,
        marginVertical: MARGIN_16,
    },
    bookInformationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: MARGIN_16,
    },
    titleText: {
        fontSize: 27,
        marginVertical: MARGIN_4,
        color: black,
    },
    authorText: {
        fontSize: 22,
        color: darkGrey,
    },
    editionCountText: {
        fontSize: 16,
        marginVertical: MARGIN_2,
        color: lightBlue,
    }
});
