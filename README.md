# Course-Registration

## 3 Project features

* You will also see the courses you have selected in the cart on the side.

* Different courses have different credit hours, will show an error message if all credit hours are more than 20 hours.

* Each course has a different price, You can see the total price of the courses you selected in cart.

## Discussing of State

I have been asked to do a project where there will be some cards, and state management to show the clicked cards,total price and credit of the cards in a cart section. So I created a cart component that shows the cards name, price and credit of that selected cards.
I used state hook to update these cards values.
So I created a function that fetches the selected cards, then I mapped on those cards and stores them in the state. then I added some conditions to the cards returned from the state and sent them to the cart section through props, then I showed the name, total price and credit of the cards to be clicked on the UI.

Our conditions were that one of these selected cards could not be shown a second time, Credit time shall not exceed 20 hours.


