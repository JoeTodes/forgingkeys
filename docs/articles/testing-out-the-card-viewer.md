---
title: Testing Out The Card Viewer
date: 2019-10-05
excerpt: Check this out, I can write <Card name="schooler"/> and I get a hover image!...
---
# Testing Out The Card Viewer
Ok let's start out with a decklist:
```html
<DeckList name="the captain of terahill"/>
````

<DeckList name="the captain of terahill"/>

Which we can do inline too: <DeckListHover name="the captain of terahill"/> but it's a little sloppier right now
<br/>
<br/>

Now for cards, if I just wanta hoverable card name:
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