import { useFormik } from "formik"
import { clientSchema } from "../../schemas/schemas";
import { axiosClientAdd } from "../../untils/axiosClientAdd";

export const ClientAddForm = () => {

    const onSubmit = (values: any, actions: any) => {
        axiosClientAdd(values.name, values.surname, values.email);
        actions.resetForm();
    }

    const {values, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
        },
        validationSchema: clientSchema,
        onSubmit
    });
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            value={values.name}
            onChange={handleChange}
            id="name" type="text" placeholder="Enter your name"></input>
            {errors.name && touched.name && <p>{errors.name}</p>}
            <label htmlFor="surname">Surname</label>
            <input 
            value={values.surname}
            onChange={handleChange}
            id="surname" type="text" placeholder="Enter your surname"></input>
            {errors.surname && touched.surname && <p>{errors.surname}</p>}
            <label htmlFor="email">Email</label>
            <input 
            value={values.email}
            onChange={handleChange}
            id="email" type="emial" placeholder="Enter your email"></input>
            {errors.email && touched.email && <p>{errors.email}</p>}
            <button type="submit">Dodaj klienta</button>
        </form>
    )
}