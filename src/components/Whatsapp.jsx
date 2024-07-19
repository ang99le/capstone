// import React, { useState } from 'react';

const WhatsApp = () => {
  const mobileNumber='7730063081';
  // const [whatsAppMsg, setWhatsAppMsg] = useState('');

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    // if (mobileNumber.length !== 10) {
    //   alert('Please insert correct WhatsApp number');
    //   return;
    // }
    // Using 964 for Iraq
    // You can change 964 with your country code
    const url = `https://wa.me/964${mobileNumber}`;
    
    window.open(url, '_blank').focus();
  };

  return (
    <div>
  
      {/* <label>
        Enter WhatsApp Number
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter WhatsApp Number"
          style={{ display: 'block', margin: '10px 0', padding: 10 }}
        />
      </label> */}
      {/* <label>
        WhatsApp Message
        <input
          type="text"
          value={whatsAppMsg}
          onChange={(e) => setWhatsAppMsg(e.target.value)}
          placeholder="WhatsApp Message"
          style={{ display: 'block', margin: '10px 0', padding: 10 }}
        />
      </label> */}
      <button onClick={initiateWhatsApp}>
      <img className="mx-auto w-[60px]" src="https://www.mobileworld.it/wp-content/uploads/2016/01/whatsapp-logo-final-1280x886.jpg" alt="whats logo"></img>
      </button>
    </div>
  );
};

export default WhatsApp;