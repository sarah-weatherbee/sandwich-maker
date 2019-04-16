import cart from '../components/cart.js';

const veggieInfo = {
    peppers: 1,
    pickles: 1,
    tomato: 2,
};

const getVeggie = () => {
    return veggieInfo;
};

const addVeggie = (ingredient) => {
    const ingredientToAdd = {
        name: ingredient,
        price: veggieInfo[ingredient],
        type: 'Veggie'
    };

    cart.addToCart(ingredientToAdd);
} 

export default { getVeggie, addVeggie };