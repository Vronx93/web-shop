export async function getShopItemById(id : number) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = response.json()
    // console.log(data)
    return data
}

export async function getAllCategories() {
    const response = await fetch("https://dummyjson.com/products/categories")
    const data = response.json()
    // console.log("allCategoriesApiData", data)
    return data
}

export async function getProductByCategory(category : string) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data = response.json()
    console.log("getItemsByCategoryApi", data)
    return data
}

export async function searchProduct(query : string) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    const data = response.json()
    console.log("search products", data)
    return data
}