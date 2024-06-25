import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, Spinner, Button, Row, Col } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import '../Style/Toggler.css';

const ViewToggle = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
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
                <>
                    <Row xs="1" sm="2" md="3">
                        {posts.map(post => (
                            <Col key={post.id}>
                                <Card className='mb-4 firstcardd border-0'>
                                    <CardBody>
                                        <CardText className='p-3'>
                                            <strong className='text-dark'>ID:</strong> {post.id}<br />
                                            <strong className='text-dark'>Title:</strong> {post.title}<br />
                                            <strong>Body:</strong> {post.body}<br />
                                            {/* <img src={Logo} alt='' className='img-fluid' /><br /> */}
                                        </CardText>
                                        <Button close onClick={() => handleRemove(post.id)} className='newbtnn'><ImCross /></Button>
                                    </CardBody>
                                </Card>
                            </Col>

                        ))}
                    </Row>
                    <nav aria-label='Page navigation example' className='d-flex justify-content-center'>
                        <ul className='pagination'>
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className='page-link btn btn-outline-primary' onClick={prevPage}>Previous</button>
                            </li>
                            <li className='page-item'><span className='page-link btn btn-outline-secondary'>{currentPage}</span></li>
                            <li className='page-item'>
                                <button className='page-link btn btn-outline-primary' onClick={nextPage}>Next</button>
                            </li>
                        </ul>
                    </nav>

                </>
            )}
        </div>
    );
}

export default ViewToggle;
