import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import MealDetails from './MealDetails';

function MealItem({ title, imageUrl, duration, complexity, affordability, onSelectMeal }) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                style={({ pressed }) => (pressed ? styles.pressed : null)}
                onPress={onSelectMeal}
            >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUrl }}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.3,
    },
    mealItem: {
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 8,
    },
});

export default MealItem;
