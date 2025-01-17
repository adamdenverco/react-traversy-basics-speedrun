import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router";

// Tutorial: https://www.youtube.com/watch?v=LDB4uaJ87e0

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

const addJobSubmit = async (jobData) => {
    console.log("job data", jobData);
    const isSuccess = false;
    try {
        const result = await fetch("/api/jobs", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(jobData),
        });
        isSuccess = true;
    } catch (error) {
        console.log("error", error);
    }
    return isSuccess;
};

const updateJobSubmit = async (jobData) => {
    console.log("job data", jobData);
    const isSuccess = false;
    try {
        const result = await fetch(`/api/jobs/${jobData.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(jobData),
        });
        isSuccess = true;
    } catch (error) {
        console.log("error", error);
    }
    return isSuccess;
};

const deleteJobSubmit = async (jobId) => {
    console.log("jobId", jobId);
    const isSuccess = false;
    try {
        const result = await fetch(`/api/jobs${jobId}`, {
            method: "DELETE",
        });
        isSuccess = true;
    } catch (error) {
        console.log("error", error);
    }
    return isSuccess;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage isHome="yes" />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route
                path="/jobs/:id"
                element={<JobPage deleteJobSubmit={deleteJobSubmit} />}
                loader={jobLoader}
            />
            <Route
                path="/edit/job/:id"
                element={<EditJobPage updateJobSubmit={updateJobSubmit} />}
                loader={jobLoader}
            />
            <Route
                path="/add-job"
                element={<AddJobPage addJobSubmit={addJobSubmit} />}
            />
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
