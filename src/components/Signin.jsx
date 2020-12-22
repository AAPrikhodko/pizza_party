import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../redux/authReducer";


const Signin = ({login}) => {

    const validateSchema = yup.object().shape({
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
                onSubmit={values => login(values.email, values.password)}
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
                            <input className='form_input'  type={'text'} name={'email'} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder=" " autocomplete="off"/>
                            <label className='form_label'  htmlFor={`email`}>Email*: </label>
                            {touched.email && errors.email && <span className='checkout_form_err'> {errors.email}</span>}
                        </div>
                        <div className='form_item'>
                            <input className='form_input'  type={'password'} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder=" " autocomplete="off"/>
                            <label className='form_label'  htmlFor={`password`}>Password*: </label>
                            {touched.password && errors.password && <span className='checkout_form_err'> {errors.password}</span>}
                        </div>

                        <button className='form_button' onClick={handleSubmit} type={'submit'}> Sign in</button>
                        <Link to='/signup'> <button className='form_button' > Sign up </button> </Link>
                    </div>

                )}
            </Formik>
        </div>
    )
}


export default connect(null, {login})(Signin)

