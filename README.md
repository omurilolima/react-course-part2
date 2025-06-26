# Playground Start

This is the starter code for the playground project we use in part 2 of my React course.

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the web server.

## About the Course

This repository belongs to part 2 of my React course covering intermediate-level topics.

- Fetching and updating data with React Query
- All about reducers, context, and providers
- Managing application state with Zustand
- Routing with React Router

You can find the course at https://codewithmosh.com

## Understanding the Application Layers

<img src="/public/Application Layers.png">

### API Client

At the bottom, we have our API client, which handles sending HTTP requests to our back end.

- APIClient

### HTTP Services

On top of that, we have our HTTP Services, which are essentially instances of API client dedicated to work with specific types of objects. For example, we have o `todoService` for working with todos.

- todoService

### Custom Hooks

Above these layers, we have our custom react query hooks, which use our HTTP services to fetch and update data. In these hooks, we have all the logic for `todoService` managing data in the cache`.

- useTodos,
- useAddTodo

### Components

Finaly at the top, we have our components, which use our hooks to fetch and update data.

Each layer in this application has a single responsability, resulting in a clean and well organized architecture.
