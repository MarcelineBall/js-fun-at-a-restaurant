function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
};

function addMenuItem(menu, menuItem) {
  if (menuItem.type === 'breakfast' && menu.menus.breakfast.includes(menuItem) === false) {
    menu.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'lunch' && menu.menus.lunch.includes(menuItem) === false) {
    menu.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'dinner' && menu.menus.dinner.includes(menuItem) === false) {
    menu.menus.dinner.push(menuItem);
  };
};

function removeMenuItem(menu, itemToRemove, menuType) {
  for (var i = 0; i < (menu.menus[menuType].length + 1); i++) {
    if (menu.menus[menuType][i] !== undefined && menu.menus[menuType][0].name === itemToRemove) {
      menu.menus[menuType].splice(i,1)
      return `No one is eating our ${itemToRemove} - it has been removed from the ${menuType} menu!`
    } else {
      return `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`
    }
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
