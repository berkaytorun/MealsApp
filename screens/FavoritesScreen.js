import { useContext } from 'react';
import MealList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

function FavoritesScreen() {
    // const favorites = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds .includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    return <MealList meals={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
