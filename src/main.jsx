import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Movies,
  Popular,
  Root,
  Top,
  Upcoming,
  SingleMovie,
  Error,
  Search,
} from "./pages";
import fetchMovies from "./utils/fetch-movies";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Movies />,
        loader: () => fetchMovies("now_playing"),
      },
      {
        path: "movie/:id",
        element: <SingleMovie />,
      },
      {
        path: "movies/popular",
        element: <Popular />,
        loader: () => fetchMovies("popular"),
      },
      {
        path: "movies/top",
        element: <Top />,
        loader: () => fetchMovies("top_rated"),
      },
      {
        path: "movies/upcoming",
        element: <Upcoming />,
        loader: () => fetchMovies("upcoming"),
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
