import { mockItem1 } from "../../test/mocks/mockData"
import { render, screen } from "../../test/test-utils"
import AddToBagBtn from "./AddToBagBtn"

describe("AddToBagBtn element", () => {
    test("should render button element", () => {
        render(<AddToBagBtn product={mockItem1} quantity={2} />)
        const button = screen.getByText(/Add to/i)
        expect(button).toBeInTheDocument()
    })
})

