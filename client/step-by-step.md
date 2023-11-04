1. Initialize React in empty folder
    npm create vite .
    npm i
    npm run dev
2. Remove folder assets and files App.css and index.css
3. In App.jsx and main.jsx Remove relevant imports of deleted css 
4. Copy all external public folders (css, images, js) in folder public
5. Open the index.html external file and change the path to src/components
--  copy the static scripts to the internal index.html above the existing script.
-- copy the code from the body (excluding the body tag) and paste within a div in the function App() return from App.jsx file
--- delete comments if any
--- rename class to className - ctrl + D select all class; then ctrl + shift + L
--- find all img tags and close them
--- find label for="" and replace with htmlFor
-- copy link hrefs in the head after the existing
-- rename the title of the index page
6. Create articles.js file within assets where publications will be stored
7. Create folder components within src folder
8. Create ArticleList component and use props
9. Import the Component in App.jsx and use in the jsx
9.1 <NavBar>{JS expressions (function expression, arrow functions) only can be used in the {} props; statements (function declaration) such as if, for …is not allowed. Ternary operator is possible}<NavBar/>
9.2 <NavBar articles={articles}/> - we create property articles which data are the object articles from the assets folder. We could have as many as properties, described one after another
9.3 The ArticleList Component may now accept props. At the HTML code we may use properties again thus cascading down to another level, e.g Article.jsx
10. Create Article.jsx Component which is meant to be reused
11. Hook - adds new functionality to a Component
11.1 useState: const [doubled, setDoubled] = useState(doubledArr) - we create create as many states as needed within a Component. The initial value could also be null or undefined or false
Note: Every Component is pre-rendered should any of its states is changes
12. Key: <li key ={Math.floor(Math.random() * 1000000)}></li>
13. <button onClick={onClick}>Remove</button>
14. <button onClick={() => setCount(c => c + 1)}>Remove</button>
15. useEffect: useEffect (() => {someFunction}, [dependency array])
