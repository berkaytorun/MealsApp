import { View, Text, StyleSheet } from 'react-native';

function SubTitle({ text, style }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#33d',
        margin: 4,
    },
    subTitleContainer: {
        padding: 4,
        borderBottomColor: '#aab',
        borderBottomWidth: 2,
        marginVertical: 6,
        marginHorizontal: 12,
    },
});
export default SubTitle;
