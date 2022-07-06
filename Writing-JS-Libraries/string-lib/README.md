# String Library

#### JavaScript Libraries

## Installation

npm i @iggijimenez/string-lib

---
# Usage

## capitalize()
#### returns input string with first character capitalized

```js
 capitalize("macbook");  
  // returns "Macbook"
```

## allCaps()
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

