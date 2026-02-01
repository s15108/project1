import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="mb-6">Get In Touch</h3>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Address</h4>
                <p className="text-muted-foreground">
                  123 School Street, Education District<br />
                  City, State - 123456<br />
                  Country
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Phone</h4>
                <p className="text-muted-foreground">
                  Main: +1 (234) 567-890<br />
                  Admissions: +1 (234) 567-891
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Email</h4>
                <p className="text-muted-foreground">
                  General: info@govschool.edu<br />
                  Admissions: admissions@govschool.edu
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Office Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 8:00 AM - 4:00 PM<br />
                  Saturday: 8:00 AM - 12:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;