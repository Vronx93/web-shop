import { render, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"
<<<<<<< Updated upstream
import { BagItemsContextProvider, useBagItemsContext } from "../../contexts/BagItemsContext"
<<<<<<< HEAD
import { mockBagItems } from "../../mocks/mocks"
=======
import { mockBagItems } from "../../test/mocks/mockData"
>>>>>>> Stashed changes
=======
import { mockBagItems } from "../../test/mocks/mockData"
>>>>>>> 894905da3e383a700592c0c8295887947a0299ef
import { MemoryRouter } from "react-router-dom"
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

describe("CheckoutForm component with items", () => {
    beforeEach(() => {
        render(<MemoryRouter><CheckoutForm /></MemoryRouter>)
    })
    
    test("should render checkout button", async () => {
        const checkoutButton = screen.queryByRole("button")
        expect(checkoutButton).toBeVisible()
    })

    test("should render CheckoutList component", () => {
        const list = screen.queryByRole("list")
        expect(list).toBeVisible()
    })
})

describe("CheckoutForm component without items", () => {

    render(<MemoryRouter><CheckoutForm /></MemoryRouter>)
    
    test("should not render button", () => {
        const checkoutButton = screen.queryByRole("button", {name: /purchase/i})
        expect(checkoutButton).not.toBeInTheDocument()
    })

    test("should not render list", () => {
        const list = screen.queryByRole("list")
        expect(list).not.toBeInTheDocument()
    })
})