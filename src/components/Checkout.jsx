import React, {useState, useEffect} from 'react'
import {Formik} from 'formik'
import {Redirect} from "react-router-dom";
import * as yup from 'yup'
import {connect} from "react-redux";
import {book} from "../redux/authReducer";



const Checkout = ({book, proceedBtnPressed}) => {

      const validateSchema = yup.object().shape({
        street: yup.string().required('required field').max(20, 'maximum 20 symbols'),
        building: yup.string().required('required field').max(6, 'maximum 6 symbols'),
        flat: yup.string().required('required field'),
        floor: yup.number().typeError('should be a number').required('required field'),
        name: yup.string().required('required field').max(20, 'maximum 20 symbols'),
        surname: yup.string().max(20, 'maximum 20 symbols'),
        email: yup.string().required('required field').email('wrong e-mail address'),
        phone: yup.string().required('required field')
    })

    return (

        <div className='checkout_body'>
            { (!proceedBtnPressed) ?
                <Formik
            initialValues={{
                street: '',
                building: '',
                flat: '',
                floor: '',
                code: '',
                comments: '',
                name: '',
                surname: '',
                email: '',
                phone: ''
            }}
            validateOnBlur
            onSubmit={values => book(values)}
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
                    <div className='form_title'> Please, fill these fields</div>

                    <div className='form_item'>
                        <input className='form_input' type={'text'} name={'street'} onChange={handleChange} onBlur={handleBlur} value={values.street} placeholder=" " autocomplete="off"/>
                        <label className='form_label' htmlFor={`street`}>Street*: </label>
                        {touched.street && errors.street && <span className='checkout_form_err'> {errors.street}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'building'} onChange={handleChange} onBlur={handleBlur} value={values.building} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`building`}>Building*: </label>
                        {touched.building && errors.building && <span className='checkout_form_err'> {errors.building}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'flat'} onChange={handleChange} onBlur={handleBlur} value={values.flat} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`flat`}>Flat*: </label>
                        {touched.flat && errors.flat && <span className='checkout_form_err'> {errors.flat}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'floor'} onChange={handleChange} onBlur={handleBlur} value={values.floor} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`floor`}>Floor*: </label>
                        {touched.floor && errors.floor && <span className='checkout_form_err'> {errors.floor}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'code'} onChange={handleChange} onBlur={handleBlur} value={values.code} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`code`}>Door code: </label>
                        {touched.code && errors.code && <span className='checkout_form_err'> {errors.code}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'comments'} onChange={handleChange} onBlur={handleBlur} value={values.comments} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`comments`}>Comments: </label>
                        {touched.comments && errors.comments && <span className='checkout_form_err'> {errors.comments}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'name'} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`name`}>Name*: </label>
                        {touched.name && errors.name && <span className='checkout_form_err'> {errors.name}</span>}
                    </div>
                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'surname'} onChange={handleChange} onBlur={handleBlur} value={values.surname} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`surname`}>Surname: </label>
                        {touched.surname && errors.surname && <span className='checkout_form_err'> {errors.surname}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'email'} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`email`}>Email*: </label>
                        {touched.email && errors.email && <span className='checkout_form_err'> {errors.email}</span>}
                    </div>

                    <div className='form_item'>
                        <input className='form_input'  type={'text'} name={'phone'} onChange={handleChange} onBlur={handleBlur} value={values.phone} placeholder=" " autocomplete="off"/>
                        <label className='form_label'  htmlFor={`phone`}>Phone*: </label>
                        {touched.phone && errors.phone && <span className='checkout_form_err'> {errors.phone}</span>}
                    </div>


                    <button className='form_button' disabled={!isValid} onClick={handleSubmit} type={'submit'}> Proceed</button>
                </div>

            )}
        </Formik>
            : <Redirect to={"/sucsessOrder"}/>}
        </div>
    )
}


const MapStateToProps = (state) => {
    return {
        proceedBtnPressed:state.cartPage.proceedBtnPressed
    }
}

export default connect(MapStateToProps, {book})(Checkout)

