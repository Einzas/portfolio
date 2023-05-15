import React from "react";

const Contact = () => {
  return (
    <section className="py-10 grid mx-8 place-content-center ">
      <article className="bg-blue-800/50 rounded-lg border-[2px] border-blue-900 py-5 px-10 sm:px-20 max-w-[650px] grid sm:grid-cols-2">
        <section>
          <h2 id="contact" className="text-2xl font-bold">
            Get in touch
          </h2>
          <p className="max-w-[200px]">
            I’m very approachable and would love to speak to you. Feel free to
            call, send me an email . Follow me in social media or simply
            complete the enquiry form.
          </p>
          <div className="mt-3">
            <i className="bx bx-phone bg-white/60 p-2 rounded-full"></i> +593 98
            047 2544
          </div>
          <div className="mt-3">
            <i className="bx bx-mail-send bg-white/60 p-2 rounded-full"></i>{" "}
            <span>jeimyjara@hotmail.com</span>
          </div>
        </section>
        <section>
          <h2 className="text-2xl mt-16 sm:mt-0 font-bold">
            Send me a Message
          </h2>

          <form className="mt-5">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-white/30 rounded-lg p-2 outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-white/30 rounded-lg p-2 outline-none"
              />
              <input
                type="text"
                placeholder="Subjet"
                className="bg-white/30 rounded-lg p-2 outline-none"
              />
            </div>

            <div className="mt-5">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                className="bg-white/30 rounded-lg p-2 outline-none"
              ></textarea>
            </div>
            <div className="mt-5">
              <button className="bg-gradient-to-r z-10 text-white from-pink-500/90 to-blue-500/60 py-2 px-5 sm:px-12 rounded-full ">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </article>
    </section>
  );
};

export default Contact;
