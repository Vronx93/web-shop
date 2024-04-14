Link: https://vronx93.github.io/web-shop/

I create this app to practice react, react router, work with api and learn how to write unit tests.
In this app user is able to:
- log in/ log out (it doesnt matter if user is logged in or not. I worked with dummydata server and I couldn't do real updates to the db (for example - shopping bag), so I decided to use localStorage for shopping bag and control if user is logged in)
- use searchbar to search items
- use categories dropdown to display list of items of selected category
- add and remove items from shopping bag
- change quantity of added items before checkout
- enter shop item page with item content
- go to stripe checkout (implemented without any server just as demo, when you click on "Pay with card" button, you can also click "TEST MODE" in right top corner to see avaiable card numbers to finish payment)

Available scripts:
-npm run dev:
  runs the app in the development mode
-npm test:
  run launches the test runner
