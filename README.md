# Responsive-Breakpoints
Library to bring bootstrap screen sizes (xs sm md lg xl) to your html elements class.

# Problem
I need some padding to a specific element when bootstrap screen size is md

# Solutions

1. Use media query. But that means replicating pixels
2. Use mixins. But that means recompiling bootstrap css
3. Use *Responsive-Breakpoints*

# Usage

include responsive-breakpoints.js

'<div class="responsive-breakpoints"></div>

This div will now automagically get bootstrap screensizes as classes:

'<div class="responsive-breakpoints xs"></div>
'<div class="responsive-breakpoints sm"></div>
'<div class="responsive-breakpoints md"></div>
'<div class="responsive-breakpoints lg"></div>
'<div class="responsive-breakpoints xl"></div>

You can now style this element specifically:

div.md {
  padding-top: 4px;
}

# Live example

https://codepen.io/HerasHackwork/pen/rGGNEK?editors=1111
