import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

function MealsList({ meals }) {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <MealItem
                        id={itemData.item.id}
                        imageUrl={itemData.item.imageUrl}
                        title={itemData.item.title}
                        duration={itemData.item.duration}
                        complexity={itemData.item.complexity}
                        affordability={itemData.item.affordability}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
export default MealsList;
