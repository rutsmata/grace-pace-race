import { useNavigate } from 'react-router-dom';

import styles from './TestDriveForm.module.css'
import useForm from '../../hooks/useForm';


export default function TestDriveForm () {
    const navigate = useNavigate();

    const {formValues, changeHandler} = useForm ({
        firstname: '',
        lastname: '',
        subject: ''
    })

    const submitHandler = () => {
      navigate('/apply')
    }

    return (
     
        <div style={{  width: '57%', margin: '10px auto'}}>
            <h2>Test Drive Form</h2>

            <div className={styles.container}>
            <form >
            <div className={styles.row}>
                <div className={styles["col-25"]}>
                <label htmlFor="fname">First Name</label>
                </div>
                <div className={styles["col-75"]}>
                <input 
                type="text" 
                id="fname" 
                name="firstname" 
                placeholder="Your name.."
                value={formValues.firstname}
                onChange={changeHandler}
                />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles["col-25"]}>
                <label htmlFor="lname">Last Name</label>
                </div>
                <div className={styles["col-75"]}>
                <input 
                type="text" 
                id="lname" 
                name="lastname" 
                placeholder="Your last name.."
                value={formValues.lastname}
                onChange={changeHandler}
                />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles["col-25"]}>
                <label htmlFor="country">Type</label>
                </div>
                <div className={styles["col-75"]}>
                <select id="type" name="type">
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="standard">Standard</option>
                </select>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles["col-25"]}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={styles["col-75"]}>
                <textarea 
                id="subject" 
                name="subject" 
                placeholder="Write something.." 
                value={formValues.subject}
                onChange={changeHandler}
                >

                </textarea>
                </div>
            </div>
            <br/>
            <div className={styles.row}>
                <button onClick={submitHandler} type="button" value="Submit">Submit</button>
            </div>
            </form>
            </div>

        </div>
    )
}

