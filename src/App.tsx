import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages";
import { AppContextProvider } from "./context/store";
import { Login } from "./pages/login";
import { Provider } from "react-redux";
import { ReduxStore } from "./redux/store";
export const App = () => {
  return (
    <Provider store={ReduxStore()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
