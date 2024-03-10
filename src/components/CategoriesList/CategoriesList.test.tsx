import { render, screen } from "@testing-library/react"
import CategoriesList from "./CategoriesList"

describe("CategoriesList component", () => {
    render(<CategoriesList isDropdownActive={false} setIsDropdownActive={() => {}} />)
    const categoriesList = screen.getByTestId("categories-list")

    test("should render list of categories", () => {
        expect(categoriesList).toBeInTheDocument()
    })
    
})