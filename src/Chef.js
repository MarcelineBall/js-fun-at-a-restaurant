class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };

  greetCustomer(customerName, isMorning) {
    if (isMorning) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    };
  };

// 1. make a function addMenuItem to place a variable into the class
  addMenuItem(location, menuItem) {
    location.push(menuItem)
  }
//2. make a funtion to find the variable placed in the class
  checkForFood(foodItem) {
    //3. check if the variable has the name value of the argument
    if (this.restaurant.includes(foodItem)) {
      //4. if so return a string to pass tests 8 and 9
      return `Yes, we're serving ${foodItem} today!`;
    } else {
      //5. if not return a string to pass tests 10 and 11
      return `Sorry, we aren't serving ${foodItem} today.`
    }
  }
};

module.exports = Chef;
