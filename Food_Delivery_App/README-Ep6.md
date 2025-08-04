# Monothic and Microservice architecture

- Monolith architecture - It means all the things inside same project, suppose a project is wriiten in java then we write apis, UI, Auth, DB, SMS all written in same language java. In this all developers like backend or frontend etc work on same repositories.
- Microservice Architecture - We have diffrent services for diffrent jobs. we have BE service, UI service, Auth service, DB service, Email service. all tese micro services combine together to form an app. This is known as seperation of concerns and single responsibility principle which aech service has its own job. In this all the respective teams have thier own repo to work upon and its own deplloyment cycle.
- How do these microservices interact with each other? These services interact with each other the UI will talk to backend , backend talk to db, backend need to talk to auth.
- When and How these services deployed and how can we access these services? suppose react is a microserveic fo UI , Backend written in java, DB written in python, so all these services have thier own ports like react on :1234, backend on :3456, like this and thse ports are map to domain name. eg: xyz.com/api for backend, xyz.com/ for UI. it can interact by call diffrent url.

# Dynamic Data

- To fetch data from backend there are two approches:

1. when page loads -> make api call (500ms) -> wait for data to come -> render the UI :
2. When page loads -> render te UI -> Make api call -> when data comes from api -> render UI again with new Data

- 2nd approch is beeter for UI and UX beacuse in 1st approch for 500ms page blanks and then suddenly UI shows thats a poor UX, wheras in 2nd approch we see inital ui atleast skeleton is there and slowly data comes and website fill with data .

# useEffect hook

- How useeffect works:

```
useEffect(() => {} , [])
```

Useeffect function takes two arguments , a callback function and a dependdency array. When a page is first rendered -> First UI is renderend -> after UI is rendered the callback function inside the useffect is rendered.

# CORS policy

- When our browser (chrome) not allow us to call from one origin to another origin eg: from localhost to swiggy api, when the origin mismatch browser blocks that api call
- how we can bypass this CORS ? By using CORS chrome extension to bypass this CORS

# Shimmer UI

- When an api call takes time to fetch data at that time we show a skeleton UI for beeter UX experience

# Create empty Array of 10 elements
```
 <>
  {Array(10)
    .fill("")
    .map((_, index) => (
      <CardShimmer key={index} />
    ))}
</>
```
 -  Array(10) creates a new array with 10 empty slots (i.e., [empty × 10]).

 - .fill("") fills all these slots with empty strings, so you get: ["", "", "", "", "", "", "", "", "", ""].
 - .map() iterates over the array, executing the callback for each item.
- In this callback, we have (_, index) => .... The _ (underscore) is a convention to indicate we don't care about the actual value (which is "" here).

# useState Hook : 
 - How const works with useState in React, and why it’s not actually contradicting JavaScript’s const behavior?
 - 1. How const Works in JavaScript
        When you declare a variable with const, you cannot reassign the variable itself.
        ```
        const x = 5;
        x = 10; // ❌ Error: Assignment to constant variable.
        ```

        BUT: If the const variable is an object or array, you can modify its contents (just not reassign it).
        ```
        const arr = [1, 2, 3];
        arr.push(4); // ✅ Allowed
        // arr = [1, 2, 3, 4]; // ❌ Not allowed (reassignment)
        ```
    2. How useState Works in React
        When you use const with useState, you’re declaring two new variables: the state value and the setter function.
        const [count, setCount] = useState(0);

        count is the current value of the state (e.g., 0 at first).

        setCount is a function that you call to update the state.

        Both variables themselves never get reassigned, only their contents change.

        The Key Point
        You’re not changing the value of the const variable itself; you’re changing the value stored in React’s state.

        Example:
        ```
        const [count, setCount] = useState(0);
        ```

        // This does NOT reassign `count` or `setCount`
        // It tells React to update its internal state,
        // and then React will give `count` the new value on the next render.
        setCount(count + 1);
        count is a constant reference to a value that React manages for you.

        Every time state changes, your component re-renders and count gets the latest value.
