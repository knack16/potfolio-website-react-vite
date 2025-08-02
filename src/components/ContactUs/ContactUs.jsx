import { useRef } from "react";

function ContactUs() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const tel = formRef.current.tel.value;

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${tel}`;

    // Trigger email via mailto
    window.location.href = `mailto:shubham.tanawade.official@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative flex items-top justify-center lg:min-h-screen bg-white sm:items-center py-10 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Details */}
            <div className="p-6 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mt-2 font-medium">
                Fill in the form to start a conversation
              </p>

              <div className="mt-6 space-y-4 text-gray-600">
                {/* Location */}
                <div className="flex items-center">
                  <svg className="w-6 h-6 mt-1 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-3 font-semibold">
                    Wadegavhan, Parner, Maharashtra, India 414302
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <svg className="w-6 h-6 mt-1 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498A1 1 0 0121 19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-3 font-semibold">+91 7666339506</span>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <svg className="w-6 h-6 mt-1 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3 font-semibold">shubham.tanawade.official@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-center"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="mt-4 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="tel"
                name="tel"
                placeholder="Telephone Number"
                className="mt-4 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-orange-500 focus:outline-none"
              />

              <button
                type="submit"
                className="mt-6 bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out duration-300 w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
