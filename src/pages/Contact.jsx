import { useState } from "react";
import Button from "../components/Button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is just a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 animate-fade-in">
        <h1 className="text-5xl font-bold text-white mb-8 text-center animate-slide-down">
          Get In Touch
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          <div>
            <label className="block text-white mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
