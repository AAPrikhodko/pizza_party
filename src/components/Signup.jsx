import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {createUser} from "./../redux/authReducer";



const Signup = ({createUser, accountBtnPressed}) => {

    const validateSchema = yup.object().shape({
        name: yup.string().required('required field').max(20, 'maximum 20 symbols'),
        email: yup.string().required('required field').email('wrong e-mail address'),
        password: yup.string().required('required field').min(6,'should be at least 6 simbols')
    })


    return (
        <div className='checkout_body'>
            { (!accountBtnPressed) ?
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={values => createUser(values.name, values.email, values.password)}
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
                        <div className='form_title'> Please, Create New account</div>
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

                        <button className='form_button' disabled={!isValid}  type={'submit'} onClick={handleSubmit}> Create account</button>
                        <Link to='/signin'> <button className='form_button' > Sign in </button> </Link>
                    </div>

                )}
            </Formik>
                : <Redirect to={"/successAccount"}/>}
        </div>
    )
}


const MapStateToProps =(state) => {
    return {
        users: state.auth.users,
        accountBtnPressed:state.auth.accountBtnPressed
    }
}

export default connect(MapStateToProps,{createUser})(Signup)

