import { Link, Outlet } from 'react-router-dom'
import styles from './About.module.css'

export default function AppDescription () {

    return (
        <>

        <div>

            <h3 className={styles.description}>GRACE PACE RACE е онлайн медия, създадена през 2018 г. от любовта и страстта на едно момиче към моторните спортове, класическите автомобили и дизайна. </h3>
            <h3 className={styles.description}>Няколко години по-късно, стотици коли тествани, безброй състезания отразени и около милион преживявания, запечатани в снимки, GPR прескочи границата на виртуалното, за да се превърне в широко разпознаваема общност, обединена от семплите неща в живота и предизвикателните автомобили на пътя.</h3>



        </div>

        <nav>
            <Link to="/more" className={styles.btn}>More info</Link>

        </nav>

        {/* <Outlet/> */}

        </>
    )
}