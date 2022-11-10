export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  return response.json();
}

export async function getProductById(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  return response.json();
}
