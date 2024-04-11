import CheckoutList from "./CheckoutList"
import { render, screen } from "../../test/test-utils"
import { MemoryRouter } from "react-router-dom"
import { mockBagItems } from "../../test/mocks/mockData"

vi.mock("../../contexts/BagItemsContext", () => ({
    useBagItemsContext: vi.fn(() => {return {
        bagItems: mockBagItems,
        setBagItems: vi.fn(),
        addToBag: vi.fn(),
        removeFromBag: vi.fn(),
        resetBagItems: vi.fn()
    }}),
    BagItemsContextProvider: vi.fn(({children}) => <div>{children}</div>)
}))

describe("CheckoutList component with list items", () => {
    render(<MemoryRouter><CheckoutList /></MemoryRouter>)
    
    test("should render list of checkout items when there are items", () => {
        const list = screen.getByRole("list")
        expect(list).toBeVisible()
    })

    test("should render correct total price", () => {
        const totalPrice = screen.getByTestId("total")
        expect(totalPrice.textContent).toBe("Total: $117")
    })
})

describe("CheckoutList component without list items", () => {
    render(<MemoryRouter><CheckoutList /></MemoryRouter>)

    test("shouldn't render list items when there are no items in shopping bag", () => {
        const list = screen.queryByRole("list")
        expect(list).not.toBeInTheDocument()
    })

    test("should render text about empty shopping bag", () => {
        const noItemsText = screen.queryByTestId("no-items")
        expect(noItemsText).toBeInTheDocument()
    })
})





