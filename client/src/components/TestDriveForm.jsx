import styles from './TestDriveForm.module.css'

export default function TestDriveForm () {
    return (
     
        <div>
            <h2>Test Drive Form</h2>
            <p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>

            <div className={styles.container}>
            <form action="/action_page.php">
            <div className={styles.row}>
                <div className={styles["col-25"]}>
                <label htmlFor="fname">First Name</label>
                </div>
                <div className={styles["col-75"]}>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles["col-25"]}>
                <label htmlFor="lname">Last Name</label>
                </div>
                <div className={styles["col-75"]}>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
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
                {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                </div>
            </div>
            <br/>
            <div className={styles.row}>
                <input type="submit" value="Submit"/>
            </div>
            </form>
            </div>

        </div>
    )
}

