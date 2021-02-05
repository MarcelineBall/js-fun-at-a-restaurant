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

// function addIngredients(newIngredient, arrayForIgredients) {
//   if (newIngredient !== arrayForIgredients[1]) {
//     arrayForIgredients = arrayForIgredients.push(newIngredient);
//   }
// };
// This only works for this particular instance of unique ingredients, I need to refactor for others

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


// var ingredients = [];
// addIngredients("eggs", ingredients);
// addIngredients("bacon", ingredients);
//
// var title = nameMenuItem("Eggs & Bacon");
// var price = formatPrice("10.85")
// var menuItem = createMenuItem(title, price, "breakfast");
// var menuItemType = menuItem.type;
//
// var recipe = createRecipe(title, ingredients, menuItemType);
// assert.equal(recipe.title, "Delicious Eggs & Bacon");
// assert.deepEqual(recipe.ingredients, ["eggs", "bacon"]);
// assert.equal(recipe.type, "breakfast");

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
