import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, Spinner, Button } from 'react-bootstrap';
import { ImCross } from "react-icons/im";

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // pagination
    const[currentPage , setCurrentPage] = useState(1);
    const postPerPage = 6;

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postPerPage}`);

                setPosts(response.data);
                setLoading(false);
            } 
            catch(error) {
                console.log('There was an error while fetching posts', error);
                // setLoading(false); 
            }};
            fetchPost();
    }, [currentPage]);

    const handleRemove = (postId) => {
        const updatePost = posts.filter(post => post.id !== postId);
        setPosts(updatePost)
    }

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1)
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1)
    };

    const indexofLastPage = currentPage * postPerPage;
    const indexofFirstPage = indexofLastPage - postPerPage;
    const currentPost = posts.slice(indexofFirstPage, indexofLastPage);

    return (
        <div className='container mt-4'>
            {loading ? (
                <div className='text-center'>
                    <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div>
            ) : (
                posts.map(post => (
                    <div className='mb-4' key={post.id}>
                        <div className='d-flex'>
                        <div className='col-md-10'>
                            <Card className='cardcard'>
                                <CardBody>
                                    {/* <CardTitle tag="h5" className='text-dark'>USER ID: {post.userId}</CardTitle> */}
                                    <CardText>
                                        <strong className='text-dark'>ID:</strong> {post.id}<br />
                                        <strong className='text-dark'>Title:</strong> {post.title}<br />
                                        <strong>Body:</strong> {post.body}<br />
                                    </CardText>

                                </CardBody>
                            </Card>
                        </div>
                        <div className='ms-5 mt-4'>
                            <Button close onClick={() => handleRemove(post.id)} className='newbtn'><ImCross /></Button>
                        </div>
                        </div>
                    </div>
                ))
            )}

            <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={prevPage}>Previous</button>
                    </li>
                    <li className='page-item'><span className='page-link'>{currentPage}</span></li>
                    <li className='page-item'>
                        <button className='page-link' onClick={nextPage}>Next</button>
                    </li>
                </ul>


            </nav>
        </div>
    );
}

export default Dashboard;
