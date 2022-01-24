import './Header.css';

function Header() {
  return (
    <div className="App-header" id='header'>
        <h2>
        Jirawat Kaewmanee
        </h2>
        <h4> I'm Front End Developer</h4>
        <a
        className="App-link"
        href="#aboutMe"
        >
        <span className="downArrow">⮋</span>
        </a>
    </div>
  );
}

export default Header;
