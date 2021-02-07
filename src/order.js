function takeOrder(newOrder, orders) {
  if (orders.length < 3) {
    orders = orders.push(newOrder);
  };
};

function refundOrder(orderToRefund, totalOrders) {
  totalOrders = totalOrders.splice((orderToRefund - 1), 1);
};

function listItems(items) {
  var itemGroup = ''
  var itemLength = items.length
  for (var i = 0; i < (items.length); i++) {
    if (i < (items.length -1)) {
      itemGroup += (items[i].item + ', ');
    } else {
      itemGroup += (items[i].item);
    };
  };
  return itemGroup;
};

function searchOrder(orders, searchItem) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item.includes(searchItem)) {
      return true;
    } else {
      continue;
    };
  };
  return false;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
