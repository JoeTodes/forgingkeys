---
title: Testing Out The Card Viewer
date: 2018-10-10
excerpt: A rundown of the custom card and decklist components made for this blog...
---
# Testing Out The Card Viewer

Ok let's start out with a decklist:
```html
<DeckList name="the captain of terahill"/>
````

<DeckList name="the captain of terahill"/>

Which we can do inline too: <DeckListHover name="the captain of terahill"/> but it's a little sloppier right now:
```html
<DeckListHover name="the captain of terahill"/>
````
<br/>
<br/>

Now for cards, if I just want a hoverable card name:
```html
<Card name="shooler"/>
```
and I get a hover image: <Card name="shooler"/> which is inline with the rest of the text!
<br/>
<br/>
What if I want one big card in as a paragraph break with a caption? Just use BigCard:
```html
<BigCard name="bulwark" caption="very crisp"/>
```
<BigCard name="bulwark" caption="very crisp"/>
But what about multiple cards in a row?? Gotcha covered with XCards:
```html
<XCards :names="['anger','routine job','miasma']" caption="wow those are some cards for sure"/>
```
<XCards :names="['anger','routine job','miasma']" caption="wow those are some cards for sure"/>

If you're using VueJS to power you blog, drop us a line and I'll hook you up with the components!

<Comments/>

