import React from "react";
// import data from "./../../jobs.json";
import JobListing from "./JobListing";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
            try {
                const result = await fetch(apiUrl);
                console.log(result);
                const data = await result.json();
                console.log(data);
                setJobs(data);
            } catch (error) {
                console.log("Error fetching jobs");
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobs();
    }, []);

    // const jobs = isHome ? data.jobs.slice(3) : data.jobs;
    const pageTitle = isHome ? "Recent Jobs" : "All Jobs";

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {pageTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JobListings;
