import React from 'react';
import { useState } from 'react'; // Import useState hook

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  return (

    <div className="contact-form-container bg-gray-200"> {/* Added bg-gray-200 for grey background and basic styling */}

      {submitted ? ( // Render success message if submitted
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      ) : (
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          className="fixed right-0 top-1/2 -translate-y-1/2 h-auto w-1/2 bg-white shadow-md rounded-lg overflow-auto p-8 flex flex-col space-y-4 justify-center" // Positioning, width, styling adjustments
        >
          <div className="pt-0 mb-3">
            <h1 className="text-3xl font-semibold text-center text-greene uppercase mb-8">
              COntact us
            </h1>
            <label htmlFor="name" className="text-sm text-gray-600"></label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <button
              className="active:bg-greene hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-greeen rounded shadow outline-none"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
      )}
      <img

        src="../login.jpg"
        alt=''
        className="w-1/2 h-auto max-h-[100vh] object-cover"
      />

    </div>



  );
};

export default ContactForm;
