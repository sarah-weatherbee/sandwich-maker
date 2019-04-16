import cart from '../components/cart.js';

const condiInfo = {
    ketchup: 1,
    marinara: 2,
    A1: 2
};

const getCondiment = () => {
    return condimentInfo;
};

const addCondi = (ingredient) => {
    const ingredientToAdd = {
        name: ingredient,
        price: condiInfo[ingredient],
        type: 'Condiment'
    };

    cart.addToCart(ingredientToAdd);
} 

export default { getCondiment, addCondi };