import { render, screen } from "../../test/test-utils"
import CheckoutItem from "./CheckoutItem"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event";
import { mockItem1 } from "../../test/mocks/mockData";

describe("CheckoutItem component", () => {
    render(<MemoryRouter><CheckoutItem item={mockItem1} /></MemoryRouter>)
    const quantityInput = screen.getByRole("spinbutton") as HTMLInputElement
    const price = screen.getByTestId("price")
    const link = screen.getByRole("link")
    const user = userEvent.setup()

    test("should display correct price on load and after input change", async () => {
        expect(quantityInput.value).toBe("1")
        expect(price.textContent).toBe("$35")
        await user.clear(quantityInput)
        await user.type(quantityInput, "5")
        expect(price.textContent).toBe("$175")
    })
    test("should redirect to the clicked item after link click", async () => {
        expect(link).toHaveProperty("pathname", `/product/${mockItem1.id}`)
    })
})

