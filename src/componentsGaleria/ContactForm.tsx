import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xoqg519", // Reemplaza con tu Service ID
        "template_765e70m", // Reemplaza con tu Template ID
        {
          nombre: formData.nombre,
          telefono: formData.telefono,
          correo: formData.correo,
          mensaje: formData.mensaje,
        },
        "7aopyJ4upyvaZBAag" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ nombre: "", telefono: "", correo: "", mensaje: "" });
          setError("");
        },
        () => {
          setError("Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="text-container">
          <h2>Elegancia para tu evento</h2>
          <p>
            En <strong>Carpas Up & Down</strong>, ofrecemos soluciones personalizadas para tu evento.
            Contamos con una amplia variedad de carpas y mobiliario para bodas, fiestas y eventos
            corporativos. ¡Haz que tu evento sea inolvidable!
          </p>
          <p>
            Contáctanos hoy para obtener más información y reservar nuestros servicios. Estamos
            listos para ayudarte.
          </p>
        </div>
        <div className="form-container">
          <h2>Contáctanos</h2>
          {isSent && <p className="success-message">¡Tu mensaje ha sido enviado con éxito!</p>}
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
