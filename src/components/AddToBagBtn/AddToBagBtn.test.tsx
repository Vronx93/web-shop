import { render, screen } from "../../test/test-utils"
import AddToBagBtn from "./AddToBagBtn"
<<<<<<< Updated upstream
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

