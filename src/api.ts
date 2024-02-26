import { FormData } from "./components/Login/Login"

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

export async function searchProduct(query : string | null) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=0`)
    const data = response.json()
    console.log("search products", data)
    return data
}

export async function LoginUser({formData} : { formData : FormData}) {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: formData.username,
          password: formData.password,
        })
      })
      if(!response.ok) {
        const data = await response.json()
        throw{
            message: data.message,
            statusText: response.statusText,
            status: response.status
        }
      }
      console.log(response.headers)
      return response
}

