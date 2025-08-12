# useState Hook

- Never use useState inside if else condition , functions, for loop etc,
- It make inconsitencies in your program.
- It only created inside functional components at top level

# Create diffrent routes inside react?

- We are using a npm library called " react router dom "
- impport createBrowserRouter : It will create routing config for us. configration means some info that will define what will happen to specific route.
- "createBrowserRouter" : takes list of paths (like an object) contains path:"/" and element: <component/>. Each object define a different path and what wiil happen in that path.
- Then we will provide that configuration to render this by using RouterProvider

  ```
  const AppLayout = () => {
  return (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
  );
  };
  ```

  ```
  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        { index: true, Component: Body },
        { path: "/about", Component: About}
      ],
    }
  ]);


  ```

  root.render(<RouterProvider router={appRouter}>)

  ```

  ```

# error page custom

- import { useRouteError } from 'react-router' : It gives you more info about error.

# Diffrenece Between <Link> (from react-router-dom) and <a> Tag (HTML Anchor):

1. <Link> (from react-router-dom):
   Purpose:
   Used for internal navigation within your React app (single-page application routing).

How it works:
It changes the URL in the browser without reloading the page.
It tells React Router to render the new route/component.
It uses the History API under the hood to manage browser history.

Benefits:
No full page reload (fast, keeps app state).
Works with React Router—updates UI without refreshing.
Supports additional features like replace, state, etc.

2. <a> Tag (HTML Anchor):
   Purpose:
   Used for standard web navigation—it reloads the page and fetches a new document from the server.

How it works:
Navigates to a new page.
Always causes a full page reload.
No knowledge of your React app's routing—just follows the href as a new request.

Drawbacks in SPAs:
Loses all React state (because it reloads everything).
Slower navigation (re-downloads JS, CSS, etc).
