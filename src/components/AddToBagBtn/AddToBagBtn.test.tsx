import { render, screen } from "../../test/test-utils"
import AddToBagBtn from "./AddToBagBtn"
<<<<<<< Updated upstream
import { useState } from "react"
import { addToBag } from "./AddToBagBtn.utils"
import { mockItem1, mockBagItems} from "../../mocks/mocks"

const TestComponent = () => {
    const mockPreventDefault = vi.fn()
    const mockEvent = { preventDefault: mockPreventDefault, type: 'click' }
    const [bagItems, setBagItems] = useState(mockBagItems)
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
=======
import { mockItem1 } from "../../test/mocks/mockData"
>>>>>>> Stashed changes

describe("AddToBagBtn element", () => {
    test("should render button element", () => {
        render(<AddToBagBtn product={mockItem1} quantity={2} />)
        const button = screen.getByText(/Add to/i)
        expect(button).toBeInTheDocument()
    })
})

