## the- extensions i use for VsCode
- auto rename tag
         - used to automaticaly change the name of a closing tag when we change the name of the opening tag(JSX)
-Bracket Pair Colorizer
        -to see the closing tag same color with the opening tag , especially useful when you have a lot of nested brackets 
-debugger for chrome 
        - debug our js code inside the vscode 
        -setup the break point inside the vscode and use the chrome debugger on the browser 
-ES7 React/Redux/React-Nartive/JS Snippets
        -snippets for creating our components and imporing libraries 
-ESLint 
    -to see any rules failing while codig , no need to go and see it on browser 
-Material icon theme 
    -giving icon and colro to the file and its easy to quickly see which file are doing what 
-NPM Intellisense 
    -for importing modules to our project from the node library 
    -Visual Studio Code plugin that autocompletes npm modules in import statements.
-path Intellisense
     -for importing from wthinin our own application 
     -Visual Studio Code plugin that autocompletes filenames.
-Prettier - Code formatter
    -document formating a little bit nicer 
- react redux firestore course snippets 
     - code snippets for the events 

## why are we using react?

 -big companies use react : netflix, instagram, arbnb , facebook , etc 
   - developers love react 
   - react is fast 
  -Easy to learn 
    - render()
    - constructor()
    -componentWillMount()
    -componenetDidMount()
    -componentWillUnMount()
    -componentWillRecieveProps()
    -componentDidUpdate()
    -setState()
    -JSX
    - react is just a library not a framework 
- does not come with nor has an opinion on:
        - forms 
        -validation 
        -HTTP API calls 
        -state management 
- it is just a javascript or typescript

one way binding ==
    - other libraries use two way binding 
    -model updated in the DOM updates the component 
    - react binding only go from component to virtual DOM which updates the DOM 
   - make the code predictable and easy to debug 
### react - virtualDOM vs actualDOM 
- it never write directly to the actual DOM 
  - the code we write staged in the virtual DOM 
  - before being applied to the actual DOM itself 
  - the DOM is incridebly slow compare to javascript 
  - we dont wanna write to the actual DOM 
  - react is pretty smart deciding when and where to update the actual DOM 
  - and apply the changes as a patch 
  - and this makes react fast when it comes to update to the dom

### thinking in  react

- understand at the component level 
- start with the mock
-then break up the application in to a component hirarchy 
- build a static version in react 
- identify the minimal (complete)representation of the state 
- state changes the properties don`t change 
- identify where the states live 
-add inverse data flow : the child could communicate with the parent , when a button is clicked understand how that method is generated 
- add server communication 

### Determine what should be stateful
1. is it passed in from a parent via propos?
       if so, it probably not a state
2. dos it change over time 
     if not , it probably not a state 
3. can you compute it based on other state or props in your component ?
   if so , it probably not a state 


### what is Redux ??

-- it is a predictab;e state container for javascript apps 
   --it is like a local database in the client
-- gives us access to time travel debugging 

== redux trade offs it asks us to :
      - describe application state as plain bject and arrays
      - describe changes in the syatem as plain object 
      - describe the logic for  handling changes as pure function 
== pure functions : give the same input, will always return the same output 
                    produces no side effect 

= redux terminologies 
       - Actions 
       -Action Creators 
        -Reducers 
        -Store 
== store 
   - holds application state 
   - allows access to state via getState()
   - Allows state to be updated via actions 
   - one store per application 
Setting up Redux 
   - configure the store 
   - create a root reducer 
   - add the store to the index.js file 
setting up react redux 
    - wrap the app with the provider component 
    - pass the provider component the 'store'
    - connect our components to the store with the 'connect' HOC

