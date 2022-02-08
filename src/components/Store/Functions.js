export const updateCartLis = (CartList, item) => {
  console.log(CartList)
  for (let index = 0; index < CartList.length; index++) {
    const ele = CartList[index];
    if (ele.id === item.id) {
      
      ele.amount += parseInt(item.amount);
      console.log(ele.amount)
      return CartList;
    }
  }
  console.log("ff")
  CartList = [...CartList, item];
  return CartList;
};
export const updateCartLisWhenRemove = (CartList, index) => {
  CartList[index].amount -= 1;
  if (CartList[index].amount === 0) {
    CartList.splice(index, 1);
  }
  return CartList;
};

