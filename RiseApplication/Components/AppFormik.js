import { View, Text } from 'react-native'
import React from 'react'
import { Formik, validateYupSchema } from 'formik';

const AppFormik = ({children, onSubmit, validationSchema, initialValues}) => {
  return (
    <Formik
     initialValues={initialValues}
     onSubmit={onSubmit}
     validationSchema={validationSchema}
    >
    <>{children}</>
    </Formik>
  )
}

export default AppFormik