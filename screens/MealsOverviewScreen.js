import { Text, View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useEffect as useLayoutEffect } from 'react';

function MealsOverviewScreen({ navigation, route }) {
    const { categoryId, title } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === categoryId).title,
        });
    }, [categoryId, navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={MEALS.filter((meal) => meal.categoryIds.includes(categoryId))}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <MealItem
                        imageUrl={itemData.item.imageUrl}
                        title={itemData.item.title}
                        duration={itemData.item.duration}
                        complexity={itemData.item.complexity}
                        affordability={itemData.item.affordability}
                        onSelectMeal={() => {
                            navigation.navigate('Meal Detail', {
                                mealId: itemData.item.id,
                            });
                        }}
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

export default MealsOverviewScreen;
