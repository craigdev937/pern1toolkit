import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Players } from "../components/Players";
import { Info } from "../components/Info";
import { AddEdit } from "../containers/AddEdit";
import { ToastContainer } from "react-toastify";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Players />} />
                <Route path="/add" element={<AddEdit />} />
                <Route path="/edit/:id" element={<AddEdit />} />
                <Route path="/indo/:id" element={<Info />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


