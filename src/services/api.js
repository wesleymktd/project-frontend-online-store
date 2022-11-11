export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  console.log(url);
  const response = await fetch(url);
  return response.json();
}

export async function addProductCart(id, title, price, thumbnail) {
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  const isDuplicate = currentCart.some((item) => item.id === id);
  const index = currentCart.findIndex((item) => item.id === id);
  if (isDuplicate) {
    currentCart[index].quantity += 1;
  } else {
    const item = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    currentCart.push(item);
  }
  localStorage.setItem('cart', JSON.stringify(currentCart));
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
