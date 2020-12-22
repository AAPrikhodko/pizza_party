import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import {Link} from "react-router-dom";

const Signup = () => {

    const validateSchema = yup.object().shape({
        name: yup.string().required('required field').max(20, 'maximum 20 symbols'),
        email: yup.string().required('required field').email('wrong e-mail address'),
        password: yup.string().required('required field').min(6,'should be at least 6 simbols')
    })


    return (
        <div className='checkout_body'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={values => console.log(values)}
                validationSchema={validateSchema}
            >
                {({
                      values,
                      touched,
                      isValid,
                      errors,
                      handleSubmit, handleBlur,
                      handleChange
                  }) => (

                    <div className='checkout_form'>
                        <div className='form_title'> Please, Log IN</div>
                        <div className='form_item'>
                            <input className='form_input' type={'text'} name={'name'} onChange={handleChange}
                                   onBlur={handleBlur} value={values.name} placeholder=" " autoComplete="off"/>
                            <label className='form_label' htmlFor={`name`}>Name*: </label>
                            {touched.name && errors.name && <span className='checkout_form_err'> {errors.name}</span>}
                        </div>
                        <div className='form_item'>
                            <input className='form_input'  type={'text'} name={'email'} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder=" " autocomplete="off"/>
                            <label className='form_label'  htmlFor={`email`}>Email*: </label>
                            {touched.email && errors.email && <span className='checkout_form_err'> {errors.email}</span>}
                        </div>
                        <div className='form_item'>
                            <input className='form_input'  type={'password'} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder=" " autocomplete="off"/>
                            <label className='form_label'  htmlFor={`password`}>Password*: </label>
                            {touched.password && errors.password && <span className='checkout_form_err'> {errors.password}</span>}
                        </div>

                        <Link to='/'> <button className='form_button' disabled={!isValid}  type={'submit'}> Create account</button> </Link>
                        <Link to='/signin'> <button className='form_button' > Sign in </button> </Link>
                    </div>

                )}
            </Formik>
        </div>
    )
}

export default Signup

