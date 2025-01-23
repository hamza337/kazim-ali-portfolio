import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const form = useRef();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/contacts`,{
        data:{
          name: form.current.name.value,
          email: form.current.email.value,
          message: form.current.message.value,
          number: form.current.phone.value
        }
      })
      toast.success('Form Submitted Successfully');
      form.current.reset();
    } catch (error) {
      toast.error('Error Submitting Form');

    }
  }

  return (
    <>
      <form className="contact_form" id="myForm" ref={form}>
        <div className="first_row">
          <input type="text" placeholder="Name *" name="name" required />
        </div>

        <div className="second">
          <input type="email" placeholder="Email *" name="email" required />
        </div>

        <div className="second">
          <input type="text" placeholder="Phone Number *" name="phone" required />
        </div>

        <div className="third">
          <textarea placeholder="Message *" name="message" required></textarea>
        </div>

        <div className="edina_tm_button">
          <button type="submit" className="color" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;