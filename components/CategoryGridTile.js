import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({ title, color }) {
    const navigation = useNavigation();

    return (
        <View style={styles.gridItem}>
            <Pressable
                onPress={() => navigation.navigate('Meals Overview')}
                style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 3 },
    },
    innerContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
    pressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default CategoryGridTile;
