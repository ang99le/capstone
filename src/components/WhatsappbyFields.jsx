import React, { useState } from 'react';

const WhatsAppbyFields = () => {
    const mobileNumber='7730063081';
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [message,setMessage]=useState('');


    const initiateWhatsApp = () => {
      // You can change 964 with your country code
      const url = `https://wa.me/964${mobileNumber}?text=${encodeURIComponent(`${firstname} ${lastname} ${message}`)}`;
      window.open(url, '_blank').focus();
    };
  
    return (
      <div>

      <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800">
          
        </label>
        <div class="mt-2">
          <input id="text" name="text" value={firstname}  onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder="Please Enter your First Name" required class=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="text">
        </label>
        <div class="mt-2">
          <input id="text" name="text" type="text" value={lastname}  onChange={(e)=>setLastname(e.target.value)} placeholder="Please Enter your last Name" required class=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <textarea name='Message' rows={2} cols={3} value={message}  onChange={(e)=>setMessage(e.target.value)} placeholder="message" required class="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" >

      </textarea>
      </div>

      <button onClick={initiateWhatsApp} className='mt-3 class="flex w-full justify-center screen rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'>
       submit
      </button>
      </div>
    );
  };
  
  export default WhatsAppbyFields;