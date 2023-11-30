import { useState } from "react";

export default function useForm (submitHandler, formInitialState) {
    const [formValues, setFormValues] = useState(formInitialState);

    // useEffect - firts added then removed

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
      e.preventDefault();

      submitHandler(formValues);
    }

    return{
        formValues,
        onChange,
        onSubmit
    }


}