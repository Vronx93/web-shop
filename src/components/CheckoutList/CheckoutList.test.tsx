import CheckoutList from "./CheckoutList"
import { BagItemsContextProvider, useBagItemsContext } from "../../contexts/BagItemsContext"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

const mockItem1 = {
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

describe("CheckoutList component with list items", () => {

    beforeEach(() => {
        vi.mock('../../contexts/BagItemsContext', async () => ({
            useBagItemsContext: vi.fn(),
            BagItemsContextProvider: vi.fn(({ children }) => children)
        }))
    
        vi.mocked(useBagItemsContext).mockReturnValue({
            bagItems: [mockItem1, mockItem2],
            setBagItems: vi.fn(),
        })
        render(<MemoryRouter><CheckoutList /></MemoryRouter>, {wrapper:BagItemsContextProvider})
    })
    
    test("should render list of checkout items when there are items", () => {
        const list = screen.getByRole("list")
        expect(list).toBeInTheDocument()
    })

    test("should render correct total price", () => {
        const totalPrice = screen.getByText(/total:/i)
        expect(totalPrice.textContent).toBe("Total: $4579")
    })
})

describe("CheckoutList component without list items", () => {

    beforeEach(() => {
        vi.mock('../../contexts/BagItemsContext', async () => ({
            useBagItemsContext: vi.fn(),
            BagItemsContextProvider: vi.fn(({ children }) => children)
        }))
    
        vi.mocked(useBagItemsContext).mockReturnValue({
            bagItems: [],
            setBagItems: vi.fn(),
        })
        render(<MemoryRouter><CheckoutList /></MemoryRouter>, {wrapper:BagItemsContextProvider})
    })

    test("shouldn't render list items when there are no items in shopping bag", () => {
        const list = screen.queryByRole("list")
        expect(list).not.toBeInTheDocument()
    })

    test("should render text about empty shopping bag", () => {
        const noItemsText = screen.queryByTestId("no-items")
        expect(noItemsText).toBeInTheDocument()
    })
})





