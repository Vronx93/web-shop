import { fireEvent, render, screen } from "@testing-library/react"
import { BagItemsContextProvider } from "../../contexts/BagItemsContext"
import AddToBagBtn from "./AddToBagBtn"
import { useState } from "react"
// import { addToBag } from "./AddToBagBtn.utils"
import { mockItem1, mockBagItems} from "../../test/mocks/mockData"

const TestComponent = () => {
    const mockEvent = { preventDefault: vi.fn(), type: 'click' }
    const [bagItems, setBagItems, addToBag] = useState(mockBagItems)

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
            <button onClick={() => addToBag(mockEvent, mockItem1, 2)}>Add to</button>
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

