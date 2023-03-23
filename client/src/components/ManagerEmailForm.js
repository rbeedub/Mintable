
import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { UserContext } from '../context/user';

export const ManagerEmailForm = ( {commitText} ) => {
  const form = useRef();

  const [user, setUser] = useContext(UserContext)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xx4sy9a', 'template_nxo3ik4', form.current, 'L1FABcFnafxspa9AN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <form class ="ui form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input value={user.name} type="text" name="from_name" />
      <label>Manager's Email</label>
      <input value={user.manager_email} type="email" name="email" />
      <label>Message</label>
      <textarea name="quick_commit1" value={commitText[0].quick_commit1} />
      <input class="ui button" type="submit" value="Send" />
    </form>
  );
};