import { render, screen } from "@testing-library/react"
import BenefitsList from "./BenefitsList"

describe("BenefitList component", () => {
    test("should render list of benefits", () => {
        render(<BenefitsList />)
        const benefitList = screen.getByRole("list")
        expect(benefitList).toBeVisible()
    })
})