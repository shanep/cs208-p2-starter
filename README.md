# Project 2

## Overview

The goal of this project is to take the following text below and write both the
HTML and the CSS to style it so it looks like what is shown in the screenshot
below.

```text
Yesterday, All those backups seemed a waste of pay. Now my database has gone away. Oh I believe in yesterday.

Suddenly, There's not half the files there used to be, And there's a milestone hanging over me. The system crashed so suddenly. I pushed something wrong, What it was I could not say.

Now all my data's gone and I long for yesterday-ay-ay-ay.

Yesterday, The need for back-ups seemed so far away. I knew my data was all here to stay, Now I believe in yesterday.
```

![Image of the page you will create](img/example.png)

## Task 1 - Author the Website

Use CSS to format the web page so it looks exactly like the screenshot shown
above.

- Use a `<div>` for each of the 4 verse containers and the outer container.
- The title “Yesterday” uses an `<h2>` tag with a 16pt Arial font that is blue and italicized. Do not use an `<i>` tag.
- The entire song is embedded in a container that is 600 x 280 pixels, has a two
  pixel solid blue border, and a five pixel padding. The background color is
  #F0F0F0.
- The outer `<div>`'s first child is the `<h2>`. The 4 child `<div>`s follow, declared in the order listed below.
- The yellow section:
  - has a background color of "yellow"
  - floats to the left
  - has a 200 pixel width
  - has a 10 pixel padding
  - has a right margin of 10 pixels, with all other margins set to 0
- The section with no background color has no CSS styling.
- The orange section:
  - has a background color of "orange"
  - is positioned at (110px, 200px) with absolute positioning
  - has a 200 pixel width
  - has a 10 pixel padding
- The orange-red section:
  - has a background color of "rgb(255, 80, 0)"
  - has white text
  - floats to the right
  - has a 200 pixel width
  - has a 10 pixel padding
  - has a right margin of 40 pixels, a top margin of 20 pixels, and all other margins set to 0
- Do not use `<br>` anywhere in your HTML.