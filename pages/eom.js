import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({  }) => {
   
    return(<div className="page-container"> 
    <Toolbar/>
        <div className={styles.main}> 
            <h1> Employee Of The Month</h1>

            <div className={styles.employeeOfTheMonth}> 
                <h3> Kevin Le</h3>
                <h6> Aspiring Software Developer</h6>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHAxPcKLg9bqg/profile-displayphoto-shrink_800_800/0/1608509536258?e=1646265600&v=beta&t=pmqpEtfOQ2BqRmQlb8tDOHAHVSAaw0naB5IqU7Fqn8w"/>
                <p>"Sometimes in life it takes the longest time to say the simplest things."</p>

            </div>


        </div>
    
    </div>)
};



export default EOM;
