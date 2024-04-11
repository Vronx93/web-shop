import { mockBenefit } from "../../test/mocks/mockData"
import { screen, render } from "../../test/test-utils"
import Benefit from "./Benefit"

describe("Benefit component", () => {
    test("should render a single benefit", () => {
        render(<Benefit index={0} benefit={mockBenefit} />)
        const listItem = screen.getByRole("listitem")
        const title = screen.getByRole("heading")
        expect(listItem).toBeVisible()
        expect(title).toBeVisible()
    })
})