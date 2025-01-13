import './contact.css'
import Email from './sendemail/email'
import ContactCard from '../mui/cards/contactCard';
import AddressCard from '../mui/cards/addressCard';
const Contact = () => {
  return <div className="Contact">
    <div className='Contact-col-1'>
      <div className='Contact-col-1-data'>
        <ContactCard className="ContactCard"></ContactCard>
        <AddressCard></AddressCard>
      </div>
    </div>
    <div className='Contact-col-2'>
      <Email data-testid="email-test"></Email>
    </div>
  </div>;
};

export default Contact;
