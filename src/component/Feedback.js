import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Button, Card, Alert } from 'react-bootstrap';

const Feedback = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: ''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 'Invalid email address').required('Email is required'),
        address: Yup.string().required('Address is required'),
        phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone number is required')
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
        alert('Form submitted');
    };

    return (
        <div className='container mt-4'>
            <Card className='border-0 col-7'>
                <Card.Body>
                    <Card.Title style={{fontWeight:"bold"}}>Thank you so much for taking the time !</Card.Title>
                    <Card.Text>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ errors, touched }) => (
                                <Form>
                                    <FormGroup className='mb-3'>
                                        <label htmlFor='firstName text-bold'>First Name</label>
                                        <Field type='text' name='firstName' id='firstName' className={`form-control design mt-2 ${errors.firstName && touched.firstName ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name='firstName' component='div' className='invalid-feedback' />
                                    </FormGroup>

                                    <FormGroup className='mb-3'>
                                        <label htmlFor='lastName'>Last Name</label>
                                        <Field type='text' name='lastName' id='lastName' className={`form-control design mt-2 ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name='lastName' component='div' className='invalid-feedback' />
                                    </FormGroup>

                                    <FormGroup className='mb-3'>
                                        <label htmlFor='email'>Email</label>
                                        <Field type='email' name='email' id='email' className={`form-control design mt-2 ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name='email' component='div' className='invalid-feedback' />
                                    </FormGroup>

                                    <FormGroup className='mb-3'>
                                        <label htmlFor='address'>Address</label>
                                        <Field as='textarea' name='address' id='address' className={`form-control  design mt-2 ${errors.address && touched.address ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name='address' component='div' className='invalid-feedback' />
                                    </FormGroup>

                                    <FormGroup className='mb-3'>
                                        <label htmlFor='phoneNumber'>Phone Number</label>
                                        <Field type='text' name='phoneNumber' id='phoneNumber' className={`form-control design mt-2 ${errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name='phoneNumber' component='div' className='invalid-feedback' />
                                    </FormGroup>

                                    <Button type='submit' variant='primary'>Submit Feedback</Button>
                                </Form>
                            )}
                        </Formik>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Feedback;
