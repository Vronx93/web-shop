import { render, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"
import { BagItemsContextProvider } from "../../contexts/BagItemsContext"

describe("CheckoutForm component", () => {
    render(<BagItemsContextProvider><CheckoutForm /></BagItemsContextProvider>)
    
    test("should render CheckoutList component", () => {
        const checkoutList = screen.getByRole("list")
        expect(checkoutList).toBeInTheDocument()
    })
})