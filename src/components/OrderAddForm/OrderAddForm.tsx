import { useFormik } from "formik"
import { orderSchema } from "../../schemas/schemas";
import { axiosOrderAdd } from "../../untils/axiosOrderAdd";

export const OrderAddForm = () => {

    const onSubmit = (values: any, actions: any) => {
        axiosOrderAdd(values.details)
        actions.resetForm();
    }

    const {values, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            details: ''
        },
        validationSchema: orderSchema,
        onSubmit
    });
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="details">Name</label>
            <input 
            value={values.details}
            onChange={handleChange}
            id="details" type="text" placeholder="Enter order details"></input>
            {errors.details && touched.details && <p>{errors.details}</p>}
            <button type="submit">Dodaj zamówienie</button>
        </form>
    )
}