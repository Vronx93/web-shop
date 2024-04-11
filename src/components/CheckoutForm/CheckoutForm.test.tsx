import { render, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"
import { BagItemsContextProvider, useBagItemsContext } from "../../contexts/BagItemsContext"
import { MemoryRouter } from "react-router-dom"
import { mockBagItems } from "../../test/mocks/mockData"

describe("CheckoutForm component with items", () => {

    beforeEach(() => {
        vi.mock("../../contexts/BagItemsContext", () => ({
            useBagItemsContext: vi.fn(),
            BagItemsContextProvider: vi.fn(({children}) => <div>{children}</div>)
        }))

        vi.mocked(useBagItemsContext).mockReturnValue({
            bagItems: mockBagItems,
            setBagItems: vi.fn(),
            addToBag: vi.fn(),
            removeFromBag: vi.fn(),
            resetBagItems: vi.fn(),
            totalPrice: vi.fn()
        })

        render(<MemoryRouter><CheckoutForm /></MemoryRouter>, {wrapper: BagItemsContextProvider})
    })
    
    test("should render checkout button", async () => {
        const checkoutButton = screen.queryByRole("button")
        expect(checkoutButton).toBeInTheDocument()
    })

    test("should render CheckoutList component", () => {
        const list = screen.queryByRole("list")
        expect(list).toBeInTheDocument()
    })
})

describe("CheckoutForm component without items", () => {

    beforeEach(() => {
        vi.mock("../../contexts/BagItemsContext", () => ({
            useBagItemsContext: vi.fn(),
            BagItemsContextProvider: vi.fn(({children}) => <div>{children}</div>)
        }))

        vi.mocked(useBagItemsContext).mockReturnValue({
            bagItems: [],
            setBagItems: vi.fn(),
            addToBag: vi.fn(),
            removeFromBag: vi.fn(),
            resetBagItems: vi.fn(),
            totalPrice: vi.fn()
        })

        render(<MemoryRouter><CheckoutForm /></MemoryRouter>, {wrapper: BagItemsContextProvider})
    })
    
    test("should not render button", () => {
        const checkoutButton = screen.queryByRole("button")
        expect(checkoutButton).not.toBeInTheDocument()
    })

    test("should not render list", () => {
        const list = screen.queryByRole("list")
        expect(list).not.toBeInTheDocument()
    })
})