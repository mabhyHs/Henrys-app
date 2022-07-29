export const addItem = (actions, array, array2) => {
  let newProduct = array.find((p) => p.id === actions);
  let productExist = array2.find((item) => item.id === newProduct.id);
  return productExist
    ? array2.map((e) =>
        e.id === newProduct.id ? { ...e, cantidad: e.cantidad + 1 } : e
      )
    : [...array2, { ...newProduct, cantidad: 1 }];
};

export const deleteItem = (array, actions) => {
  let itemToDelete = array.find((item) => item.id === actions);
  return itemToDelete.cantidad > 1
    ? array.map((item) =>
        item.id === actions ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    : array.filter((item) => item.id !== actions);
};

export const deleteAllItem = (array, actions) => {
  return array.filter((item) => item.id !== actions);
  
};
