import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import List from '../components/List';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/SubTitle';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect, useContext } from 'react';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {
    const { mealId } = route.params;
    const currentMeal = MEALS.find((meal) => meal.id === mealId);
    const favorites = useContext(FavoritesContext);
    const isFavorite = favorites.ids.includes(mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: currentMeal.title,
            headerRight: () => {
                return (
                    <IconButton
                        icon={isFavorite ? 'star' : 'star-outline'}
                        color='#fff'
                        onPress={() => (isFavorite ? favorites.removeFavorite(mealId) : favorites.addFavorite(mealId))}
                    />
                );
            },
        });
    }, [navigation, isFavorite]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: currentMeal.imageUrl }}
            />
            <Text style={styles.title}>{currentMeal.title}</Text>
            <MealDetails
                style={styles.details}
                textStyle={styles.textStyle}
                duration={currentMeal.duration}
                complexity={currentMeal.complexity}
                affordability={currentMeal.affordability}
            />

            <ScrollView
                style={styles.listContainer}
                showsVerticalScrollIndicator={false}
            >
                <SubTitle text='Ingredients' />
                <List data={currentMeal.ingredients} />
                <SubTitle text='Steps' />
                <List data={currentMeal.steps} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 8,
        color: '#33d',
    },
    textStyle: {
        color: '#33d',
    },
    listContainer: {
        width: '90%',
    },
});

export default MealDetailScreen;
