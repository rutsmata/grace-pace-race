import { useState, useEffect } from "react";

export default function useForm (formInitialState) {
    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    return{
        formValues,
        changeHandler,
    }


}