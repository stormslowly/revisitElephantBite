XERN
----

a personal boilerplate for `Express` `React` and `Node.js` 

this project is copy from [MERN-starter](https://github.com/Hashnode/mern-starter) and 
did some modification for my personal tastes (good or bad).

below is the modifications
 
 1. use [react-hot-loader](https://github.com/gaearon/react-hot-loader) as hot loader
 2. server side render accept synchronized actions
 3. data fetching using `req` other than `params`
 
 
## NOTE

now `react-hot-loader` v3 is in beta stage, but i am using v1.3.0
with this version you have to write react component using extends `Component`
and pure function Component will not be hot loaded
