import cart from '../components/cart.js';

const cheeseInfo = {
    gruyere: 3,
    government: 0,
    swiss: 1
};

const getCheese = () => {
    return cheeseInfo;
};

const addCheese = (ingredient) => {
    const ingredientToAdd = {
        name: ingredient,
        price: cheeseInfo[ingredient],
        type: 'Cheese'
    };

    cart.addToCart(ingredientToAdd);
} 

export default { getCheese, addCheese };