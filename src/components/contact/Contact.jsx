import React, { useState, useEffect } from "react";

import "./Contact.css";

const Contact = ({ state }) => {
  const [resume, setResume] = useState();

  useEffect(() => {
    const { contract } = state;
    const fetchResume = async () => {
      const resume = await contract.methods.resumeLink().call();
      setResume(resume);
    };

    contract && fetchResume();
  }, [state]);

  return (
    <section className='contact-section'>
      <h1 className='title'>Interested? Let's Get In Touch!</h1>
      <a
        href={`https://jade-fundamental-hawk-687.mypinata.cloud/ipfs/${resume}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <button className='downlodeBTN'>View Resume</button>
      </a>
    </section>
  );
};

export default Contact;
