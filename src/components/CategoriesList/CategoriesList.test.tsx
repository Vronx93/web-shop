import { render, screen } from "../../test/test-utils"
import CategoriesList from "./CategoriesList"
import { MemoryRouter } from "react-router-dom"

describe("CategoriesList component", () => {

    test("should not render list items when dropdown is not active ", () => {
        render(<CategoriesList isDropdownActive={false} setIsDropdownActive={() => {}} />)
        // vi.mock("../../api", () => ({
        //     getAllCategories: vi.fn(() => Promise.resolve(["category1", "category2"]))
        // }))
        const categoriesList = screen.queryByRole("listitem")
        expect(categoriesList).not.toBeInTheDocument()
    })
    
    test("should render list items when dropdown is active", async () => {
        render(<MemoryRouter><CategoriesList isDropdownActive={true} setIsDropdownActive={() => {}} /></MemoryRouter>)
        // vi.mock("../../api", () => ({
        //     getAllCategories: vi.fn(() => Promise.resolve(["category1", "category2"]))
        // }))
        const categoriesList = screen.queryAllByRole("listitem")
        expect(categoriesList).toHaveLength(20)
    })
})

// vi.mock('../../contexts/BagItemsContext', async () => ({
//     useBagItemsContext: vi.fn(),
//     BagItemsContextProvider: vi.fn(({ children }) => children)
// }))

// vi.mocked(useBagItemsContext).mockReturnValue({
//     bagItems: [mockItem1, mockItem2],
//     setBagItems: vi.fn(),
// })