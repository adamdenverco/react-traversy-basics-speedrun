import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
// import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage isHome="yes" />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobPage />} />
            <Route path="/edit/job/:id" element={<EditJobPage />} />
            <Route path="/add-job" element={<AddJobPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

// const App = () => {
//     return (
//         <>
//             <MainLayout>
//                 <Hero />
//                 <Feature />
//                 <JobListings />
//                 <ViewAllJobs />
//             </MainLayout>
//         </>
//     );
// };

export default App;
