export function addFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function removeFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(val => val !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function loadFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}