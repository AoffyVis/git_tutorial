import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FormComponent from './FormComponent/FormComponent';
import { useState } from 'react'
import Contact from './ContactData/Contact'


function Footer() {

  const [contactLists, setContactLists] = useState([])

  const onAddNewContact = (newContact) => {
    setContactLists((prevContactData) => {
      return [newContact, ...prevContactData]
    })

    // console.log("This data from FormComponent = " , newContact)
  }

  return (
    
    <div className='FooterContainer' id="FooterContainer">
        <div className='footerTitle'>
            <h2>Plaese,don't hesitate to contact me</h2>
        </div>
        <div className="gridContact">
            <div className="contact">
                <h2>Contact me</h2>
                <FormComponent onAddContact={onAddNewContact}/>
            </div>
            <div className="contact">
                <h2 id="snsContact">
                    <a href="https://www.facebook.com/jirawat.kaewmanee/"><FacebookIcon className='facebookIcon'/></a>
                    <a href="https://twitter.com/AoffyGaze"><TwitterIcon className='twitterIcon'/></a>
                    <a href="https://www.instagram.com/aof_.jirawat/"><InstagramIcon className='igIcon'/></a>
                </h2>
            </div>
            <div className="contact">
                <h2>Quick Navigation</h2>
                <div className="quickNav">
                    <a href="#header">Home</a>
                    <a href="#aboutMe">About</a>
                    <a href="#skillsContainer">Skills</a>
                    <a href="#projectContainer">My Projects</a>
                    <a href="#FooterContainer">Contact me</a>
                </div>
            </div>
        </div>
        {/* <div>
            <Contact contacts = {contactLists}/>
        </div> */}
    </div>
  );
}

export default Footer;
