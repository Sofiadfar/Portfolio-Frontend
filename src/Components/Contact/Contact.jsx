import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API request (replace with your API call)
    try {
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // await apiCall(formData); // Example API request
      setShowNotification(true);
      setFormData({ name: "", email: "", message: "", phone: "" });
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className={styles.notification}
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.notificationContent}>
              <div className={styles.notificationIcon}>✓</div>
              <div className={styles.notificationText}>
                <h4>Success!</h4>
                <p>Your details have been successfully submitted</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>

        <div className={styles.contactContent}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>
              Let's Create Something Amazing
            </h3>
            <p className={styles.contactDescription}>
              Ready to bring your ideas to life? Let's discuss your project and
              create something extraordinary together.
            </p>

            <div className={styles.contactMethods}>
              <a
                href="mailto:sofiadfar856@gmail.com"
                className={styles.contactMethod}
              >
                <div className={styles.methodIcon}>📧</div>
                <div>
                  <h4>Email</h4>
                  <p>sofiadfar856@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919682106838" className={styles.contactMethod}>
                <div className={styles.methodIcon}>📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9682106838</p>
                </div>
              </a>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Pinglena, Pulwama Kashmir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className={styles.formTextarea}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
