import { useSelector } from "react-redux";

const ContactList = props => {
  const email = useSelector(state => state.contact_email);
  const phone = useSelector(state => state.contact_phone);
  const address = useSelector(state => state.contact_address);
  let address_string = null;

  if (address) {
    address_string = `${address.street}, ${address.postal}, ${address.city}`;
  }

  return (
    <ul className={props.className || null}>
      {email ? (
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      ) : null}

      {phone ? (
        <li>
          <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
        </li>
      ) : null}

      {address_string ? <li>{address_string}</li> : null}
    </ul>
  );
};

export default ContactList;
