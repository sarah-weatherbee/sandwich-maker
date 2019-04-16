import cart from '../components/cart.js';

const breadInfo = {
    white: 1,
    wheat: 2,
    hardtack: 3,  
};

const getBread = () => {
    return breadInfo;
};

const addBread = (ingredient) => {
    const ingredientToAdd = {
        name: ingredient,
        price: breadInfo[ingredient],
        type: 'Bread'
    };

    cart.addToCart(ingredientToAdd);
} 

export default { getBread, addBread };