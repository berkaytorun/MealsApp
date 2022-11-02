import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    totalFavorites: 0,
    addFavorite: (favoriteId) => {},
    removeFavorite: (favoriteId) => {},
});

const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (favoriteId) => {
        setFavorites((currentFavorites) => [...currentFavorites, favoriteId]);
    };

    const removeFavorite = (favoriteId) => {
        setFavorites((currentFavorites) => {
            return currentFavorites.filter((mealId) => mealId !== favoriteId);
        });
    };

    const context = {
        ids: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
