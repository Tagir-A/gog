# GOG.com Frontend Recruitment Task by [Tagir-A](https://tagir-a.github.io/)

## Description
Implement the design from provided PSD file accurately. Feel free to use any tools you like. Please send us a link to the repository of your solution after you're finished - we're as much interested in the source code as in the working application.
Don't worry about cross-browser compatibility, or mobile views support. Focus on code quality and maintainability.
## Requirements
1. Top bar with Cart icon:

* Number reflects amount of Products in Cart

2. Cart dropdown

* It should be closed by default

* "CLEAR CART" button removes all Products from Cart

* Hovering over Product reveals "Remove" option

3. Content with Products that you can add to Cart

* Clicking on price button adds Product to Cart

* Products in Cart should be marked as "IN CART"

* You can’t add the same product to cart twice

If there is something missing or unclear in the description above, we ask you to be creative and implement your own solution to the problem.

## Comments
Since it was possible to use **any** tools available, this task was build with [create-react-app](https://github.com/facebook/create-react-app).
I decided to go with react, because I didn't want to be obstructed by the previously unknown API's. Since it is only a recruitment task, and I suppose the point is to check the overall structure and maintainability.

## Build

**Prepare**
```javascript
npm i
```
**Start development**
```javascript
npm start
```
*The browser will open automatically, then you should wait for the initial compile.*

**Tests**
```javascript
npm test
```

> Written with [StackEdit](https://stackedit.io/).
