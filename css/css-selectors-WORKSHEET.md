
# CSS Worksheet
To preview a markdown file in VS Code:

Ctrl + SHIFT + V


## Problem 1
Explain the difference between these two selectors (make sure to mention the elements that each selector is targeting):
```css
ul li.selected{
	/*rules (property settings) go here*/
}


ul li .selected{
	/*rules (property settings) go here*/
}
```
### The first selector is targeting li elements with a class of 'selected' that are children of ul elements. The second is targeting all elements with a class of 'selected' that are children of li elements and grnadchildren of ul elements (must be a 'selected' class inside an li inside a ul)



## Problem 2
What are **square brackets** used for in CSS selectors?
For example, what does the following selector target:
```css
input[type=text]{
	/*rules (property settings) go here*/
}
```
### Square brackets target elements with a certain attribute. In the example, the code would target input elements with the 'type' attribute of 'text'



## Problem 3
What is the **greater than** character used for in CSS selectors?
For example, what does the following selector target:
```css
div > p{
	/*rules (property settings) go here*/
}
```
### the greater than character (>) targets children, so in this example, ot would be p elements inside div elements



## Problem 4
What is the **tilde** used for in CSS selectors?
For example, what does the following selector target?
```css
h3 ~ p{
	/*rules (property settings) go here*/
}
```
### the tilde targets elements following the first occurance of the trigger. the first part (h3 in this example) is the trigger, and the rule applies to all the following p elements. It should be noted that if the rule was:
```css
p ~ p{
	/* rule goes here */
}
```
### it would target all p elements following the first one, but not the first one.
```html
<body>
	<h3>This would be unaffected as it is not a p element</h3>
	<p>This element would not be targeted, but would trigger the rule for all p elements that follow </p>
	<h3>This would be unaffected as it is not a p element</h3>
	<p>This would be affected because the previous p element triggered the rule</p>
	<p>This would also be affected</p>
</body>
```



## Problem 5
What is the **+** sign used for in CSS selectors?
For example, what does the following selector target:
```css
input[type=radio] + label{
	/*rules (property settings) go here*/
}
```
### the + sign targets adjacent siblings, so in this case it would bethe first label element following an input element that has the type attribute of 'radio'



## Problem 6
Explain what a **psuedo selector** is in CSS.
And include a code sample that demonstrates a psuedo selector.
### Pseudo selectors could refer to either pseudo-classes or pseudo-elements. Pseudo-classes can target based on wither state (such as being clicked, hovering, or a link having been visited), or based on position (such as first, last, or nth child). Pseudo-elements appear to be position-based only. 
### An example of pseudo-class:
```css
a:visited{
/* rule goes here */
}
```
### An example of pseudo-element:
``` css
p::first-letter{
	color:red;
	font-size:24px;
}
```
