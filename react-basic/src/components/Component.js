import './Component.css';
import Skill from './Skill'
import FormComponent from '../FormComponent/FormComponent';
import Contact from '../ContactData/Contact';
import { useState } from 'react'

const Title = () => <h1>This is my skills</h1>
const Description = () => <h3>My name is Jirawat K. I'm Front End Developer</h3>

function HelloComponent() {

  // const contactData = [
  //   {id:'', email:'', message:''},
  // ]

  const [contactLists, setContactLists] = useState([])

  const onAddNewContact = (newContact) => {
    setContactLists((prevContactData) => {
      return [newContact, ...prevContactData]
    })

    // console.log("This data from FormComponent = " , newContact)
  }

  return (
    <div className="HelloComponent">
        <div className="component-section">
           <Title/>
            <Skill/>
            <Description/>
        </div>
        <div className='FormComponent'>
            <FormComponent onAddContact={onAddNewContact}/>
        </div>
        <div className='contactData'>
          <Contact contacts = {contactLists}/>
        </div>
    </div>
  );
}

export default HelloComponent;
