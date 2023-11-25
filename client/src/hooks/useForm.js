import { useState } from "react";

export default function useForm (submitHandler, formInitialState) {
    const [formValues, setFormValues] = useState(formInitialState);

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
      e.preventDefault();

      submitHandler(formValues);
    }

    return{
        formValues,
        onChange,
        onSubmit
    }


}