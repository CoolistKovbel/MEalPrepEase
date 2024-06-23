import ContactForm from "@/app/components/contact-form";

const Page = async () => {
  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <div className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a quote</h2>
        <p className="text-lg mb-6">
          Need help marketing your next project, product, or even website.
          Contact us with some additional details about your objective and we
          will get back to you as soon as we can.
        </p>

        {/* Contact Form */}
        <ContactForm />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect with Me:</h3>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://twitter.com/lyub24"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Or Drop an Email:</h3>
            <p className="text-gray-400">noEmail@yet.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
