import { render, screen } from "@testing-library/react"
import Category from "./Category"
import { MemoryRouter } from "react-router-dom"

describe("Category component", () => {
    test("should have a correct visible link with correct name", async () => {
        render(<MemoryRouter><Category name="mockCategory" setIsDropdownActive={vi.fn(() => {})} /></MemoryRouter>)
        const link = await screen.findByRole("link")
        expect(link).toHaveAttribute('href', `/search/?category=mockCategory`)
        expect(link).toBeVisible()
        expect(link.textContent).toBe("mockCategory")
    })
})