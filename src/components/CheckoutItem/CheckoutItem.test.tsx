import { render, screen } from "@testing-library/react"
import CheckoutItem from "./CheckoutItem"
import { BagItemsContextProvider } from "../../contexts/BagItemsContext"
import { Router } from "react-router-dom"
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from 'history';

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

describe("CheckoutItem component", () => {
    const history = createMemoryHistory()
    render(<Router location={history.location} navigator={history}><CheckoutItem item={mockItem} /></Router>, {wrapper: BagItemsContextProvider})
    const quantityInput = screen.getByRole("spinbutton")
    const price = screen.getByTestId("price")
    const link = screen.getByRole("link")
    history.push = vi.fn()
    const user = userEvent.setup()

    test("should display correct price on load and after input change", async () => {
        //check if component loads with correct starting quantity
        expect(quantityInput.value).toBe("3")
        //check if component display correct price on load
        expect(price.textContent).toBe("$4497")
        //check if price updates on change quantity
        await user.clear(quantityInput)
        await user.type(quantityInput, "5")
        expect(price.textContent).toBe("$7495")
    })
    test("should redirect to the clicked item after link click", async () => {
        expect(link).toHaveProperty("pathname", `/product/${mockItem.id}`)
    })
})

