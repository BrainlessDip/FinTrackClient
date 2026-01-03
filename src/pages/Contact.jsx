import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-300 min-h-screen pt-10 px-6">
      <div className="max-w-3xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg border border-base-200">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Contact Us</h1>
        <p className="text-center text-base-content/70 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email@example.com" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea className="textarea textarea-bordered h-32" placeholder="How can we help?"></textarea>
          </div>
          <button className="btn btn-primary w-full mt-4">Send Message</button>
        </form>

        <div className="mt-8 text-center border-t border-base-300 pt-6">
            <p className="font-semibold">Or reach us directly:</p>
            <p className="text-blue-500">support@fintrack.com</p>
            <p className="text-base-content/60">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
