import React, { useEffect, useState } from 'react';
import "./css/writeandupdate.css";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const WriteAndUpdate = ({ titleName }) => {
    const { id } = useParams(); // Destructure id from useParams
    const [Blog, setBlog] = useState({ title: "", desc: "" });
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const change = (e) => {
        const { name, value } = e.target;
        setBlog({ ...Blog, [name]: value });
    };

    const submit = async () => {
        try {
            if (id) {
                // Update existing blog
                await axios.put(`http://localhost:1000/api/v1/updateBlog/${id}`, Blog);
                alert("Blog updated successfully");
            } else {
                // Create new blog
                await axios.post("http://localhost:1000/api/v1/post", Blog);
                alert("Blog created successfully");
            }
            setBlog({ title: "", desc: "" }); // Reset form after submission
            navigate('/'); // Redirect to home or another page after submission
        } catch (error) {
            console.error("Error submitting the blog:", error);
            alert("An error occurred while submitting the blog");
        }
    };

    useEffect(() => {
        if (id) {
            const fetch = async () => {
                try {
                    const res = await axios.get(`http://localhost:1000/api/v1/getBlog/${id}`);
                    setBlog(res.data.data);
                } catch (error) {
                    console.error("Error fetching the blog data:", error);
                }
            };
            fetch();
        }
    }, [id]);

    return (
        <div className='container'>
            <h3>{titleName} Blogs</h3>
            <div className='d-flex flex-column my-5 py-5'>
                <input
                    className="form-text p-3"
                    onChange={change}
                    type='text'
                    name='title'
                    value={Blog.title}
                    placeholder='Title'
                />
                <textarea
                    className="form-text p-3"
                    onChange={change}
                    name="desc"
                    value={Blog.desc}
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='Description'
                ></textarea>
                <div className='d-flex justify-content-center'>
                    <button
                        type="button"
                        className="btn btn-outline-dark my-3"
                        onClick={submit}
                    >
                        {titleName} Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WriteAndUpdate;
