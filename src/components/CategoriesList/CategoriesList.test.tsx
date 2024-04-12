import { render, screen } from "../../test/test-utils"
import CategoriesList from "./CategoriesList"
import { MemoryRouter } from "react-router-dom"

describe("CategoriesList component", () => {

    test("should not render list items when dropdown is not active ", () => {
        render(<MemoryRouter><CategoriesList isDropdownActive={false} setIsDropdownActive={() => {}} /></MemoryRouter>)
        const categoriesList = screen.queryByRole("listitem")
        expect(categoriesList).not.toBeInTheDocument()
    })
    
    test("should render list items when dropdown is active", async () => {
        render(<MemoryRouter><CategoriesList isDropdownActive={true} setIsDropdownActive={() => {}} /></MemoryRouter>)
        const categoriesList = await screen.findAllByRole("listitem")
        expect(categoriesList).toHaveLength(20)
    })
})
