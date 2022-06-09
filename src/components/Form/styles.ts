import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "center",

    },

    header: {
        flexDirection: "row",
        marginVertical: 16,
        marginTop: -5
    },

    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 24
    },

    titleText: {
        fontSize: 20,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium
    },

    image: {
        width: 24,
        height: 24,
        marginRight: 8
    },

    input: {
        width: "100%",
        height: 120,
        padding: 12,
        marginBottom: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.regular
    },

    footer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 16   
    }
})
