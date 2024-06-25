import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Sidebar.css'
import Logo from '../asset/7309681.jpg'
import { FaBeer } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";

const Sidebar = () => {
    return (
        <div className='d-flex flex-column flex-shrink-0 p-4 text-white sidebarbg' style={{ width: '280px', height: '100%' }} id='sidebar'>
            <Link to='/dashboard' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                <div className='card card-body border-0 firstcard mt-4'>
                    <div >
                        <div className='d-flex'>
                            <img src={Logo} alt='' className='img-fluid firstimg' />
                            <div className='w-100 ms-3'>
                                <h5 className='text-dark mb-0'>HI, READER</h5>
                                <p className='text-dark mb-0'>Your News data!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <hr />
            <ul className='nav nav-pills flex-column mb-auto'>
                <li>
                <Link to='/viewToggle' className='nav-link p-0'>
                <div className='card card-body border-0 firstcard mt-4'>
                    <div >
                        <div className='d-flex'>
                            <div className='w-100 ms-3'>
                                <h4 className='text-dark mb-0'>View Toggle</h4>
                                <div className='d-flex'>
                                <p className='text-dark mb-0 list2'><CiCircleList  size={30} color='white'/> </p>
                                <p className='text-dark mb-0 list'><FaBeer size={30} color='white'/></p>
                       
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
                    </Link>
                </li>
                <li>
                <Link to='/feedback' className='nav-link p-0'>
                <div className='card card-body border-0 firstcard mt-4'>
                        <div className='d-flex'>
                            <div className='w-100'>
                                <h4 className='text-dark mb-0'>Have a Feedback</h4>
                                <p className='text-dark mb-0 list1'>We are Listening,</p>
                            </div>
                         </div>
                </div>
                    </Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default Sidebar
