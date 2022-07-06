# Math Library

#### JavaScript Libraries

## Installation



---

## GoldenRatio()
#### Add a new property to Number that is the Golden Ratio

```js
 capitalize("macbook");  
  // returns "Macbook"
```

### Number Methods
---
## round()
#### rounds to the nearest whole number

```js
9.50.round();    
  // returns 10
```

## floor()
#### goes to the nearest lowest whole number

```js
9.50.floor()
  // returns 9
```

## ceil()
#### returns the highest nearest whole number

```js
9.4.ceil() 
  // returns 10
```


## pad()
#### returns pads Number with x 0s before, and y 0s after

```js
1.1.pad(4, 4);  
  // returns 0001.1000
```

## degToRad()
#### returns a convertion from degrees to radians

```js
degToRad(45);  
  // returns 0.785
```

## radToDeg()
### Coverts radians to degrees.

```js
readToDeg(0.785);  
  // returns 44.977
```

## toDollars()
#### returns input formatting money is a common task for software projects. A function could save you time in the future. The goal of this function is to take a numeric value and return a string beginning with a '$' and rounded to two decimal places

```js
toDollars(10);  
  // returns $10.00
```

## tax(rate)
#### Returns the tax amount

```js
tax(10);  
  // returns 10.10
```

## interest(total, year, rate)
#### returns the calculation with the interest over time

```js
interest(10, 10, 8)
  // returns 21.58
```

## mortage(principal, numberOfPayments, interestRate))
#### returns the calculation of a mortage

```js
mortage(10, 10, 8)
  // returns 100.00000046650739
```







# Math Libary

Challenge 1 GoldenRatio - Add a new property to Number that is the Golden Ratio

Challenge 2 Number Methods: round, floor, ceil - These functions already exist on the Math Object, your job is to make a method on Number that does the same thing. Rather than Math.round(x) your method will work like this: x.round() or (1.99).round().

Challenge 3 pad(x, y) - pads Number with x 0s before, and y 0s after.

Challenge 4 degToRad(n) - I'm surprised this function is not included with JS.

Challenge 5 radToDeg(deg) - Covert radians to degrees.

Challenge 6 toDollars(amount) - Formatting money is a common task for software projects. A function could save you time in the future. The goal of this function is to take a numeric value and return a string beginning with a '$' and rounded to two decimal places.

Challenge 7 tax(rate) - Returns the tax amount
Example: tax(rate) - returns the amount with tax

Challenge 8 interest(total, year, rate) - Write a function that calculates the interest over time.