import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { submitContactForm } from '../redux/action/contact/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      await dispatch(submitContactForm(formData));
      toast.success('Message Sent Successfully!', {
        position: 'top-right',
        autoClose: 2000,
      });
      document.getElementById('myForm').reset();
    } catch (error) {
      toast.error('Message not sent!', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <form className="contact_form" id="myForm" ref={form} onSubmit={sendEmail}>
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
          <button type="submit" className="color">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;