import { Link } from 'react-router-dom'
import styles from './AppDescription.module.css'

export default function AppDescription () {

    return (
        <div>

        <div>

            <h3 className={styles.description}>GRACE PACE RACE е онлайн медия, създадена през 2018 г. от любовта и страстта на едно момиче към моторните спортове, класическите автомобили и дизайна. Няколко години по-късно, стотици коли тествани, безброй състезания отразени и около милион преживявания, запечатани в снимки, GPR прескочи границата на виртуалното, за да се превърне в широко разпознаваема общност, обединена от семплите неща в живота и предизвикателните автомобили на пътя.</h3>

            <button className={styles.btn}>Back</button>


        </div>

        <div>
            <button className={styles.btn}>More</button>

        </div>

        </div>
    )
}