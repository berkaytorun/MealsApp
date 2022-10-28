import { CATEGORIES } from '../data/dummy-data';
import { FlatList, Text } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <CategoryGridTile
                    color={itemData.item.color}
                    title={itemData.item.title}
                />
            )}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
