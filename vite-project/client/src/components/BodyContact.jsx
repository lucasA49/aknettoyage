import { useState } from "react";
import "../styles/BodyContact.css";
import emailjs from "@emailjs/browser";

function BodyContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_9cygyff";
    const serviceId = "service_w9e9eqs";
    // eslint-disable-next-line no-use-before-define
    sendFeedback(serviceId, templateId, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    });
    e.target.reset();
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "LniQmCfChS_KX6zQX")
      .then(() => {
        setNotification(
          "Votre demande a bien été envoyée et nous vous répondrons dans les meilleurs délais."
        );
        setTimeout(() => setNotification(""), 5000); // Masquer la notification après 5 secondes
      })
      .catch(() => {
        setNotification(
          "Échec de l'envoi de votre demande. Veuillez réessayer."
        );
        setTimeout(() => setNotification(""), 5000); // Masquer la notification après 5 secondes
      });
  };

  return (
    <>
      <div className="head-contact">
        <p>oui</p>
      </div>
      <div className="body-contact">
        <div className="container-contact">
          <h2>Contactez-nous</h2>
          {notification && <div className="notification">{notification}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BodyContact;
