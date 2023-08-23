import { View, Text } from 'react-native'
import React from 'react'
import { Formik, validateYupSchema } from 'formik';

const AppFormik = ({children, onSubmit, validationSchema, validate, initialValues}) => {
  return (
    <Formik
     initialValues={initialValues}
     onSubmit={onSubmit}
     validationSchema={validationSchema}
     validate={validate}
    >
    <>{children}</>
    </Formik>
  )
}

export default AppFormik