import SkillList from './SkillList'
import { v4 as uuidv4 } from 'uuid';

const Skill = () => {
    const data = [
        {title:"HTML"},
        {title:"JavaScript"},
        {title:"Cascading Style Sheets"},
        {title:"ReactJS"},
        {title:"NodeJS"},
        {title:"ExpressJS"},
    ]

    return (
        <ul>
            {data.map((element) => {
                return <SkillList {...element} key={uuidv4()}/>
            })}
        </ul>
    );
}

export default Skill