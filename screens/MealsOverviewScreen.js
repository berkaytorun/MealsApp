import { Text, View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useEffect as useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';

function MealsOverviewScreen({ navigation, route }) {
    const { categoryId, title } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === categoryId).title,
        });
    }, [categoryId, navigation]);

    return <MealsList navigation={navigation} meals={MEALS.filter((meal) => meal.categoryIds.includes(categoryId))} />;
}

export default MealsOverviewScreen;
