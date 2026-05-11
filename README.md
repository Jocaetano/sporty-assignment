# Sporty Assignment

App built with Vite, React, SWR, Tailwind CSS, and Radix UI.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install` or your preferred package manager
3. Copy or rename the `.env.example` file to `.env`, add your API key if needed
4. Start the development server with `npm run dev`
5. Open your browser and navigate to `http://localhost:5173`

Optionally, you can use the `npm run build` command to create a production build of the app and run it with `npm run preview`.

### Design Decisions

- The app uses Swrv and Pinia-Colada for data fetching, and managing server state. It makes caching and revalidation easy.
- The app used Reka UI for the select component, as it is an element that needs more consideration when it comes to accessibility.
- The app uses Tailwind CSS for its styling, which provides a flexible and customizable framework for styling.

- The Search state is handled by Vue-qs, which is a library that save states in the URL, and restore them when the page is loaded.
- The filter state could also have been handled by Vue-qs, but, just to use another option, I implemented a composable serving a singleton
  reactive state.

- The data fetching was contained in hooks so it would be easier to test or to replace Swrv and Pinia-Colada with other libraries like
  TanStack Query.

- Api calls live in the api folder, and are separated by competency.

## Known Limitations

- The documentation of TheSportsDB API does not provide a way to limit the number of results, so I could not, for example, implemtent
  pagination or infinite scrolling.

## Use of AI

The UI was mostly build by v0, with this single prompt: "All logic is done, I just need a new UI. Use tailwind, radix-ui or shadcn."
The AI did not modify any logic, but added some new components that were not needed, which I removed. The league card component became
too large with all styles, so I split it and created the Badge component. Some skeletons components were also added by the AI.

## Differences to the React version

Filter state was handled by React Context in React, in the Vue version I used a much more simple solution of having a singleton reactive
in a composable.

I had to use 2 different libraries for the data fetching, as I could not find all features I needed in either library. Ideally, I would
have researched more to either find a library with all the features I needed, or to find out how to implement what I needed with just one 
of the libraries I used.