import { render, screen } from "@testing-library/react"
import Footer from "../Footer/Footer"

describe("BenefitList component", () => {
    render(<Footer />)
    const benefitList = screen.getByTestId("benefit-list")

    test("should be rendered in Footer component", () => {
        expect(benefitList).toBeInTheDocument()
    })
})