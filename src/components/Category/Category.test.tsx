import { render, screen } from "@testing-library/react"
import Category from "./Category"
import { MemoryRouter } from "react-router-dom"

describe("Category component", () => {

    beforeEach(() => {
        render(<MemoryRouter><Category name={"mockCategory"} setIsDropdownActive={() => {}} /></MemoryRouter>)
    })

    test("should have a correct visible link with correct name", async () => {
        const link = await screen.findByRole("link")
        console.log(link)
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', `/search/?category=mockCategory`)
        expect(link).toBeVisible()
        expect(link.textContent).toBe("mockCategory")
    })
})