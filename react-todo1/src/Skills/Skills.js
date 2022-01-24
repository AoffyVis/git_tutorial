import './Skills.css';

function Skills() {
  return (
    <div className="skillsContainer" id='skillsContainer'>
        <div>
            <h2>My Skills</h2>
        </div>
        <div className="gridFrontSkills">
            <div className="Skill">
                <img 
                    src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="html"/>
                <p>Responsive</p>
                <p>Your site looks good everywhere</p>
            </div>
            <div className="Skill">
                <img src="https://image.flaticon.com/icons/png/512/919/919826.png" alt="css"/>
                <p>Customizable</p>
                <p>Easy to theme and customize with CSS</p>
            </div>
            <div className="Skill">
                <img src="https://image.flaticon.com/icons/png/512/919/919828.png" alt="js"/>
                <p>Consistent</p>
                <p>A mature, well-tested, stable codebase</p>
            </div>
            <div className="Skill">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968559.png" alt="xd"/>
                <p>Design like you always imagined</p>
                <p>Wireframe, animate, prototype, collaborate, and more</p>
            </div>
        </div>
        <div className="gridBackEndSkill">
        <div className="Skill">
                <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="react"/>
                <p>React JS</p>
            </div>
            <div className="Skill">
                <img src="https://cdn-icons.flaticon.com/png/512/3344/premium/3344281.png?token=exp=1640585701~hmac=c35758015238835422d94fa9bc6b9f8d" alt="webFramework"/>
                <p>Web Framework</p>
            </div>
            <div className="Skill">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="node"/>
                <p>Node JS</p>
            </div>
            <div className="Skill">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png"
                    alt="sql"/>
                <p>SQL SERVER</p>
            </div>
        </div>
    </div>
  );
}

export default Skills;
