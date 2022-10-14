import * as yup from 'yup'

export const clientSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    name: yup.string().min(4, "Minimum 4 characters").required("Required"),
    surname: yup.string().min(5, "Minimum 5 characters").required("Required")
})

export const orderSchema = yup.object().shape({
    details: yup.string().min(7, "Minimum 7 characters").required("Required")
})