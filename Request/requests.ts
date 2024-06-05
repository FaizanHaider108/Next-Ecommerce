export async function getAllCategory() {
  try {
    const AllCategories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return AllCategories.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  try {
    const AllProducts = await fetch("https://fakestoreapi.com/products");
    return AllProducts.json();
  } catch (error) {
    console.log(error);
  }
}



export async function getSingleProduct(id:string){
    const singleProduct = await fetch(`https://fakestoreapi.com/products/${id}`)
    return singleProduct.json();
  }


export async function getProductByCategory(category: string) {
     const productCate = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        return productCate.json()
      }