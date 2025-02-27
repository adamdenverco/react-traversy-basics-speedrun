import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router";

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    // from Google
    const truncateString = (str, maxLength, ending = "...") => {
        if (str.length <= maxLength) {
            return str;
        }

        const truncated = str.slice(0, maxLength - ending.length);
        const lastSpaceIndex = truncated.lastIndexOf(" ");

        if (lastSpaceIndex === -1) {
            return truncated + ending;
        }

        return truncated.slice(0, lastSpaceIndex) + ending;
    };

    // {
    //     "id": "1",
    //     "title": "Senior React Developer",
    //     "type": "Full-Time",
    //     "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
    //     "location": "Boston, MA",
    //     "salary": "$70K - $80K",
    //     "company": {
    //         "name": "NewTek Solutions",
    //         "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
    //         "contactEmail": "contact@teksolutions.com",
    //         "contactPhone": "555-555-5555"
    //     }
    // },

    // console.log("showFullDescription: ");
    // console.log(showFullDescription);

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">
                    {showFullDescription
                        ? job.description
                        : truncateString(job.description, 100)}{" "}
                </div>

                <button
                    className=" text-indigo-500 mb-2 "
                    onClick={() => setShowFullDescription(!showFullDescription)}
                >
                    {showFullDescription ? "show less" : "show more"}
                </button>

                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
                        <FaMapMarker className=" inline text-lg text-red-600 mr-2" />
                        {job.location}
                    </div>
                    <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobListing;
