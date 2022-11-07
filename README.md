# test-multi-app

* Vue 3.2.41
* Vite 3.1.8

[Vite docs](https://vitejs.dev/guide/build.html#multi-page-app) suggest that the dev server will automatically resolve multi-page apps for you. 
However, in this repo when you visit `/login` it loads up the root `index.html` file instead of `/login/index.html` so it attempts to load the main Vue app. 

In my real app I have a separate login app and we do a real browser navigation instead of an in-app navigation because the server might end up redirecting to a different
identity provider depending on configuration. So from the home page we have a `<a href='/login'></a>` tag. Clicking this link goes to `/login` but renders the root app instead of the login index page. 

Defining the entry points as rollup options makes the production build run correctly. It is just the dev server that doesn't recognize the route. 