import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Players } from "../components/Players";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";
import { ToastContainer } from "react-toastify";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Players />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


