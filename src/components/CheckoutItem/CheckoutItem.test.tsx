import { act, fireEvent, render, screen } from "@testing-library/react"
import { useEffect, useState } from "react"
import { handleQuantityChange } from "./CheckoutItem.utils"
import { Product } from "../SearchResults/SearchResults"

const mockItem = {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "quantity": 3,
    "price": 1499,
    "images": [
        "https://cdn.dummyjson.com/product-images/7/1.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
}

const TestComponent = ({item} : {item: Product}) => {
    const [bagItems, setBagItems] = useState([item])
    const [quantity, setQuantity] = useState(item.quantity)
    const mockEvent = {type: "change"}
    const handleQuantityChangeMock = vi.fn(() => handleQuantityChange(mockEvent, setQuantity, setBagItems))

    useEffect(() => {
        setQuantity(5)
    }, [])
    

    return(
        <div>
            <span>{bagItems[0].title}</span>
            <input data-testid="quantity-input" onChange={handleQuantityChangeMock} value={quantity} id={(bagItems[0].id.toString())}/>
            <span data-testid="total-price">{bagItems[0].price * quantity}</span>
            <span data-testid="bag-items-quantity">{bagItems[0].quantity}</span>
        </div>
    )
}

render(<TestComponent item={mockItem} />)
const inputQuantity = await screen.findByTestId("quantity-input") as HTMLInputElement
const totalPrice = await screen.findByTestId("total-price")
const bagItemQuantity = await screen.findByTestId("bag-items-quantity")

describe("Handle quantity change util function", () => {

    test("quantity input should be in the document", () => {
        expect(inputQuantity).toBeInTheDocument()
    })

    test("should correctly set input", () => {
        expect(inputQuantity.value).toBe("5")
    })

    test("should correctly calculate total price", () => {
        expect(totalPrice.textContent).toBe("7495")
    })


})

