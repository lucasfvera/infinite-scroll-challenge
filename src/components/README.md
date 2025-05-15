# Directory Purpose

This directory structure is based on Atomic Design pattern. You can reed more
about it in [Brad Frost book called Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

In this directory we should store multiple reusable components. Depending on their
function, styling or complexity we will put them in different categories:
_Atoms_, _Molecules_, or _Organisms_.

For more complex applications we could also add _Layouts_ and _Pages_ but we will leave it out for the sake of this exercise.

## Atoms

> _...the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional._

They are the most basic building unit for our app. Mostly they include styling of the UI library we are going to use.\
For example, we could have an Input and a Button as Atoms.

## Blocks

> _... [blocks] are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form [block]._

They are usually built with multiple _Atoms_ and they add custom logic or
functionality.\
For example, we could build a SearchBar Block with the Input and Button Atoms.

## Systems

> _[Systems] are relatively complex UI components composed of groups of [blocks] and/or [atoms] and/or other [systems]. These [systems] form distinct sections of an interface._

These are more complex components that reuses multiple Blocks and sometimes Atoms
as well. They could be sections of a page like the header.
For example, a header could have multiple Link Atoms and a SearchBar Block.

## Layouts

> _[Layouts] are page-level objects that place components into a layout and articulate the design’s underlying **content structure**._

The idea for layouts is to arrange components in the proper way building a view
that has meaning and structures the content (without real data).\
We should be able to input any data from a json file into the Layout and the
structure, spacings, sizes, etc. should work properly.