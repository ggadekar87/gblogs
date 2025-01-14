import './contact.css'
import Email from './sendemail/email'
import ContactCard from '../mui/cards/contactCard';
const Contact = () => {
  return <div className="Contact">
    <div className='Contact-col-1'>
      <div className='Contact-col-1-data'>
        <ContactCard className="ContactCard"></ContactCard>
      </div>
    </div>
    <div className='Contact-col-2'>
      <Email data-testid="email-test"></Email>
    </div>
  </div>;
};

export default Contact;
