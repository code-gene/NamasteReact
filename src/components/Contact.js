const Contact = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <h1 className="font-semibold text-4xl text-gray-800 mb-4">Contact Us</h1>
      <form className="bg-white rounded-lg p-4 shadow-lg w-96">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-semibold"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            placeholder="Type your message here"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
