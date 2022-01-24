import './About.css';
import img from './Rx7.png';

function About() {
  return (
    <div className="aboutMe" id='aboutMe'>
        <div>
            <img src={img} className="img-me" alt="img" />
        </div>
        <div className="myDesc">
            <h2>
              What does I do?
            </h2>
            <p>I'm currently working Front-end Developer.
                I obsess over the minor details in HTML/CSS/JAVASCRIPT and am passionate in getting computers to more
                effectively work
                on your side by freeing you of the burdens of carrying out repetitive tasks through automative
                processes. <br /><br />
                For the front-end I usually work with Javascript, either standalone or including popular frameworks like
                ReactJS, EJS. I also make the web pretty by using CSS and, whenever needed, any of their
                friends: Bootstrap or etc.
                <br /><br />
                For the back-end I also work with Javascript (NodeJS, ExpressJS). But, of course,
                I also have knowledge of computer programming languages such as PHP, MSSQL, and hardware engineering
            </p>
        </div>
    </div>
  );
}

export default About;
