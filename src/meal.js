function nameMenuItem(food) {
  return `Delicious ${food}`;
};

function createMenuItem(food, price, type){
  return {
    name: food,
    price: price,
    type: type,
  };
};

function addIngredients(newIngredient, arrayForIgredients) {
  if (arrayForIgredients.includes(newIngredient) === false) {
    arrayForIgredients = arrayForIgredients.push(newIngredient);
  };
};

function formatPrice(itemPrice) {
  return `$${itemPrice}`;
};

function decreasePrice(price) {
  return price = (price * 0.9)
}

function createRecipe(name, ingredients, menuItemType) {
  return {
    title: name,
    ingredients: ingredients,
    type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
