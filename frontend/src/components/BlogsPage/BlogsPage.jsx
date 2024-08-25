import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './css/BlogsPage.css';
import { FaEdit } from 'react-icons/fa';

const BlogsPage = () => {
    const { id } = useParams(); // Destructuring id from useParams
    const [Blog, setBlog] = useState(null); // Default state set to null
    const [loading, setLoading] = useState(true); // Loading state to manage the loading message

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const res = await axios.get(`http://localhost:1000/api/v1/getBlog/${id}`);
                setBlog(res.data.data); // Set the blog data on successful response
            } catch (error) {
                console.error("Error fetching the blog data:", error);
                // Optionally handle the error, like showing an error message in the UI
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchBlog();
    }, [id]);

    // Optionally handle cases where no blog is found
    if (loading) {
        return <p>Loading blog data...</p>;
    }

    if (!Blog) {
        return <p>Blog not found or has been deleted.</p>;
    }

    return (
        <div className='page container'>
            <div className='my-3'>
                {/* Only show the edit link if Blog exists and _id is defined */}
                {Blog._id && (
                    <Link to={`/updateBlog/${Blog._id}`} className='d-flex justify-content-end edit my-5'>
                        <FaEdit />
                    </Link>
                )}
                <h1 className='mt-2 link-front-page'>{Blog.title}</h1>
                <p className='blogsPage my-2 mt-3'>{Blog.desc}</p>
            </div>
        </div>
    );
};

export default BlogsPage;
