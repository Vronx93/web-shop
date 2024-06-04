import CheckoutList from "./CheckoutList";
import { render, screen } from "../../test/test-utils";
import { MemoryRouter } from "react-router-dom";
import { mockBagItems } from "../../test/mocks/mockData";
import { useBagItemsContext } from "../../contexts/BagItemsContext";
vi.mock("../../contexts/BagItemsContext", () => ({
  useBagItemsContext: vi.fn(() => {
    return {
      bagItems: mockBagItems,
      setBagItems: vi.fn(),
      addToBag: vi.fn(),
      removeFromBag: vi.fn(),
      resetBagItems: vi.fn(),
      totalPrice: vi.fn(() => {
        let total = 0;
        for (let i = 0; i < mockBagItems.length; i++) {
          total += mockBagItems[i].quantity * mockBagItems[i].price;
        }
        return total;
      }),
    };
  }),
  BagItemsContextProvider: vi.fn(({ children }) => <div>{children}</div>),
}));

describe("CheckoutList component with list items", () => {
  test("should render list of checkout items when there are items", async () => {
    render(
      <MemoryRouter>
        <CheckoutList />
      </MemoryRouter>
    );
    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();
  });

  test("should render correct total price", async () => {
    render(
      <MemoryRouter>
        <CheckoutList />
      </MemoryRouter>
    );
    const totalPrice = await screen.findByTestId("total");
    expect(totalPrice.textContent).toBe("Total: $117");
  });
});

describe("CheckoutList component without list items", () => {
  beforeEach(() => {
    vi.mocked(useBagItemsContext).mockReturnValueOnce({
      bagItems: [],
      setBagItems: vi.fn(),
      addToBag: vi.fn(),
      removeFromBag: vi.fn(),
      resetBagItems: vi.fn(),
      countTotalPrice: vi.fn(),
    });
  });

  test("shouldn't render list items when there are no items in shopping bag", () => {
    render(
      <MemoryRouter>
        <CheckoutList />
      </MemoryRouter>
    );
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  test("should render text about empty shopping bag", async () => {
    render(
      <MemoryRouter>
        <CheckoutList />
      </MemoryRouter>
    );
    const noItemsText = await screen.findByTestId("no-items");
    expect(noItemsText).toBeInTheDocument();
  });
});
