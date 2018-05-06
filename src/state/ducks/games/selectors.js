export function isInCart(game, {
    products
}) {
    return Boolean(products.find(product => product.title === game.title));
}
