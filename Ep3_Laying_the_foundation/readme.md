- To run build project we use scripts in package.json file
  "scripts" : {
  "start": "parcel index.html"
  "build" : "parcel build index.html"
  }
- now to run or execute the project we use a command npm run Script_Name . eg: npm run start or npm run build

- reactElement -> it is an Object when we render this element to DOM it becames HTMLElement

2. "watch": "parcel watch index.html"
What it does: Starts Parcel in watch mode—it keeps running, rebuilding your files when they change.

Why it’s useful: Automatic reloads mean you see code updates live, without manual rebuilds.

Example: You save a file, and Parcel rebuilds the project behind the scenes.

3. "format": "prettier --write ."
What it does: Formats all your code files using Prettier.

Why it’s useful: Enforces consistent code style, making code easier to read and review.

Example: Run npm run format before committing, so everyone’s code looks the same.

4. "lint": "eslint ."
What it does: Runs ESLint on your codebase, finding potential bugs and style issues.

Why it’s useful: Prevents common mistakes and enforces coding standards.

Example: npm run lint alerts you if you’ve missed a semicolon or used a deprecated API.

5. "lint:fix": "eslint . --fix"
What it does: Like above, but also fixes any fixable problems automatically.

Why it’s useful: Saves you time by correcting simple issues for you.

Example: Typo in code? Run npm run lint:fix and it’ll fix minor mistakes.

6. "prettier": "prettier --check ."
What it does: Checks if code is formatted according to Prettier rules, but doesn’t change anything.

Why it’s useful: Useful for CI (Continuous Integration) to enforce code style before merging.

Example: In a pull request, CI fails if someone’s code isn’t formatted.

7. "prettier:write": "prettier --write ."
What it does: Actually formats code, like "format" (same command).

Why it’s useful: Use before commits for clean code style.

Example: npm run prettier:write reformats your messy code instantly.


| Script | Dev Server | Watches for Changes | Opens Browser | Production Build | Use Case                          |
| ------ | :--------: | :-----------------: | :-----------: | :--------------: | --------------------------------- |
| start  |      ✔     |          ✔          |       ✖       |         ✖        | Local development (manual open)   |
| dev    |      ✔     |          ✔          |       ✔       |         ✖        | Local development (auto open)     |
| watch  |      ✖     |          ✔          |       ✖       |         ✖        | Build/watch files (no server)     |
| build  |      ✖     |          ✖          |       ✖       |         ✔        | Create optimized production files |


* root.render(heading) ->  it will replace all the code written inside root id div in HTML

* JSX - Javascript Syntax which is easier to create HTML Elements.  It is not HTML, It is "HTML like syntax".

* const heading = React.createElement("h1", { id: "heading" }, "Hello India!"); vrs const heading = <h1 id="heading">Hello India!</h1>; 

// JSX is a syntax extension that allows us to write HTML-like code in JavaScript.
// It is transformed into React.createElement calls by the build tools.
// The following line is equivalent to the above React.createElement call.
// JSX is not valid JavaScript, so it needs to be transpiled to JavaScript using Babel or a similar tool.
// The JSX code is transformed into a React element object that can be rendered to the DOM.

* Babel - It takes JSX and transpiled so that js engine understands.
* Jsx -> transpiled before it reaches the JS -> PARCEL -> BABEL
* jsx -> React.createElemnt -> JS object ->HTML element(render)
* There are 2 types of react components:
- Class Based Components - older way of writing code
- Functional comonents - new way of writing code

* Functional Component - it just a normal function which return some jsx.     
Note -  always start naming of a component with capital letter
*  componet in react is a function that returns a React element.

* component Composition : composing two or more components into one another. 
or eg:  const Header = () => {
    return (
        <div>
            <Title/>
            <HeadingComponent/>
        </div>
    )
}


