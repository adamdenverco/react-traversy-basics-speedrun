import React from "react";
import Hero from "./../components/Hero";
import Feature from "./../components/Feature";
import JobListings from "./../components/JobListings";
import ViewAllJobs from "./../components/ViewAllJobs";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Feature />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    );
};

export default HomePage;
