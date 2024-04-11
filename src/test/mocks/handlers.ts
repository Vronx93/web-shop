import { http, HttpResponse } from "msw";

export const successGetHandlers = [
    http.get(`https://dummyjson.com/products/:id`, () => {
        return HttpResponse.json(
            {
                "id": 55,
                "title": "Money Heist Printed Summer T Shirts",
                "description": "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
                "price": 66,
                "discountPercentage": 15.97,
                "rating": 4.9,
                "stock": 122,
                "brand": "The Warehouse",
                "category": "mens-shirts",
                "thumbnail": "some image links",
                "images": [
                    "image link",
                    "image link",
                    "image link",
                    "image link",
                    "image link"
                ]
            }, 
            {
                status: 200
            }
        )
    }),
    http.get("https://dummyjson.com/products/categories", () => {
        return HttpResponse.json([
            "smartphones",
            "laptops",
            "fragrances",
            "skincare",
            "groceries",
            "home-decoration",
            "furniture",
            "tops",
            "womens-dresses",
            "womens-shoes",
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "womens-watches",
            "womens-bags",
            "womens-jewellery",
            "sunglasses",
            "automotive",
            "motorcycle",
            "lighting"
        ],
        {
            status: 200
        }
        )
    }),
    http.get("https://dummyjson.com/products/category/:category", () => {
        return HttpResponse.json(
            [
                {
                    "id": 16,
                    "title": "Hyaluronic Acid Serum",
                    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
                    "price": 19,
                    "discountPercentage": 13.31,
                    "rating": 4.83,
                    "stock": 110,
                    "brand": "L'Oreal Paris",
                    "category": "skincare",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/16/1.png",
                        "https://cdn.dummyjson.com/product-images/16/2.webp",
                        "https://cdn.dummyjson.com/product-images/16/3.jpg",
                        "https://cdn.dummyjson.com/product-images/16/4.jpg",
                        "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
                    ]
                },
                {
                    "id": 17,
                    "title": "Tree Oil 30ml",
                    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
                    "price": 12,
                    "discountPercentage": 4.09,
                    "rating": 4.52,
                    "stock": 78,
                    "brand": "Hemani Tea",
                    "category": "skincare",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/17/1.jpg",
                        "https://cdn.dummyjson.com/product-images/17/2.jpg",
                        "https://cdn.dummyjson.com/product-images/17/3.jpg",
                        "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
                    ]
                },
                {
                    "id": 18,
                    "title": "Oil Free Moisturizer 100ml",
                    "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
                    "price": 40,
                    "discountPercentage": 13.1,
                    "rating": 4.56,
                    "stock": 88,
                    "brand": "Dermive",
                    "category": "skincare",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/18/1.jpg",
                        "https://cdn.dummyjson.com/product-images/18/2.jpg",
                        "https://cdn.dummyjson.com/product-images/18/3.jpg",
                        "https://cdn.dummyjson.com/product-images/18/4.jpg",
                        "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
                    ]
                },
                {
                    "id": 19,
                    "title": "Skin Beauty Serum.",
                    "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
                    "price": 46,
                    "discountPercentage": 10.68,
                    "rating": 4.42,
                    "stock": 54,
                    "brand": "ROREC White Rice",
                    "category": "skincare",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/19/1.jpg",
                        "https://cdn.dummyjson.com/product-images/19/2.jpg",
                        "https://cdn.dummyjson.com/product-images/19/3.png",
                        "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
                    ]
                },
                {
                    "id": 20,
                    "title": "Freckle Treatment Cream- 15gm",
                    "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
                    "price": 70,
                    "discountPercentage": 16.99,
                    "rating": 4.06,
                    "stock": 140,
                    "brand": "Fair & Clear",
                    "category": "skincare",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/20/1.jpg",
                        "https://cdn.dummyjson.com/product-images/20/2.jpg",
                        "https://cdn.dummyjson.com/product-images/20/3.jpg",
                        "https://cdn.dummyjson.com/product-images/20/4.jpg",
                        "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
                    ]
                }
            ]
        )
    }),
    // http.get(`https://dummyjson.com/products/search?q=:query&limit=0`, () => {
    //     return HttpResponse.json()
    // })
]


// export async function searchProduct(query : string | null) {
//     const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=0`)
//     const data = response.json()
//     console.log("search products", data)
//     return data
// }

// export async function LoginUser({formData} : { formData : FormData}) {
//     const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           username: formData.username,
//           password: formData.password,
//         })
//       })
//       if(!response.ok) {
//         const data = await response.json()
//         throw{
//             message: data.message,
//             statusText: response.statusText,
//             status: response.status
//         }
//       }
//       console.log(response.headers)
//       return response
// }

