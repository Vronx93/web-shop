import { fireEvent, render, screen } from "@testing-library/react"
import { BagItemsContextProvider } from "../../contexts/BagItemsContext"
import AddToBagBtn from "./AddToBagBtn"
import { useState } from "react"
import { addToBag } from "./AddToBagBtn.utils"

const mockItem1 = {
    "id": 70,
    "title": "Stainless Steel Women",
    "price": 35,
    "thumbnail": "https://cdn.dummyjson.com/product-images/70/thumbnail.jpg",
    "images": [
        "https://cdn.dummyjson.com/product-images/70/1.jpg",
        "https://cdn.dummyjson.com/product-images/70/2.jpg",
        "https://cdn.dummyjson.com/product-images/70/thumbnail.jpg"
    ],
    "quantity": 1
}

const mockItem2 = {
    "id": 35,
    "title": "3 DOOR PORTABLE",
    "price": 41,
    "thumbnail": "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
    "images": [
        "https://cdn.dummyjson.com/product-images/35/1.jpg",
        "https://cdn.dummyjson.com/product-images/35/2.jpg",
        "https://cdn.dummyjson.com/product-images/35/3.jpg",
        "https://cdn.dummyjson.com/product-images/35/4.jpg",
        "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg"
    ],
    "quantity": 2
}

const mockItemsArray = [mockItem1, mockItem2]

const TestComponent = () => {
    const mockPreventDefault = vi.fn()
    const mockEvent = { preventDefault: mockPreventDefault, type: 'click' }
    const [bagItems, setBagItems] = useState(mockItemsArray)
    const addToBagMock = vi.fn(() => addToBag(mockEvent, setBagItems, mockItem1, 2))

    return(
        <div>
            {bagItems.map(item => (
                <div key={item.id}>
                    <span data-testid={`name ${item.title}`}>
                        Name: {item.title}
                    </span>
                    <span data-testid={`quantity ${item.title}`}>
                        Quantity: {item.quantity}
                    </span>
                </div>
            ))}
            <button onClick={addToBagMock}>Add to</button>
        </div>
    )
}

describe("AddToBagBtn element", () => {
    test("should render button element", () => {
        render(<BagItemsContextProvider><AddToBagBtn product={mockItem1} quantity={2} /></BagItemsContextProvider>)
        const button = screen.getByText(/Add to/i)
        expect(button).toBeInTheDocument()
    })

    test("should render correct item name", () => {
        render(<TestComponent />)
        const renderedName = screen.getByTestId("name Stainless Steel Women")
        expect(renderedName).toHaveTextContent("Name: Stainless Steel Women")
    })

    test("should render correct item quantity", () => {
        render(<TestComponent />)
        const renderedQuantity = screen.getByTestId("quantity Stainless Steel Women")
        expect(renderedQuantity).toHaveTextContent("Quantity: 1")
    })

    test("after addToBagBtn is clicked should sum up quantity of item in the bag to be 3", () => {
        render(<TestComponent />)
        const button = screen.getByText(/Add to/i)
        fireEvent.click(button)
        const renderedQuantity = screen.getByTestId("quantity Stainless Steel Women")
        expect(renderedQuantity).toHaveTextContent('Quantity: 3')
    })
})

