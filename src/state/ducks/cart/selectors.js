export function isInCart(game, {
    products
}) {
    products.find(product => product.title === game.title);
}
