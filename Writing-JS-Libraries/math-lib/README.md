# Math Library

#### JavaScript Libraries

## Installation

npm i @iggijimenez/string-lib

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
#### returns input string with all capital characters

```js
allCaps("iphone");    
  // returns "IPHONE"
```

## capitalizeWords()
#### returns input string with first character of each word capitalized

```js
capitalizeWords("javascript is fun to learn");  
  // returns "Javascript Is Fun To Learn"
```

## removeExtraSpaces()
#### returns input string with empty space trimmed from beginning and end,
#### and removes any empty characters more than one space

```js
removeExtraSpaces("    this is a typo    ");  
  // returns "this is a typo"
```


## kebobCase()
#### returns input string with dashes instead of spaces
#### output is all lowercase, and without extra spaces

```js
kebobCase("my project name");  
  // returns "my-project-name"
```

## snakeCase()
#### returns input string with underscores instead of spaces
#### output is all lowercase, and without extra spaces

```js
snakeCase("my function name");  
  // returns "my_function_name"
```

## camelCase()
### returns input string with no spaces
#### each word's first character is capitalized EXCLUDING the first word

```js
camelCase("my variable name");  
  // returns "myVariableName"
```

## shift()
#### returns input string with first character shifted to back

```js
shift("qwerty");  
  // returns "wertyq"
```

## makeHashTag()
#### returns list of three longest words in input string as hashtags
#### if string is three words or less, all words will be returned as hashtags
#### output is a list of all lowercase terms, beginning with "#"

```js
makeHashTag("cooking food is one of my favorite things");  
  // returns [ "#favorite", "#cooking", "#things" ]
```

## isEmpty()
#### returns true if input string is empty
#### an empty string contains only whitespace

```js
isEmpty("       ");  
  // returns true

isEmpty(" :) ");  
  // returns false
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