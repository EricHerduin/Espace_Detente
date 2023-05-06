import React, { useState } from "react";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    phoneNumber: "",
    message: "",
    interestProduct: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormValues({
        ...formValues,
        interestProduct: [...formValues.interestProduct, value],
      });
    } else {
      setFormValues({
        ...formValues,
        interestProduct: formValues.interestProduct.filter(
          (product) => product !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les champs de formulaire
    if (
      formValues.postalCode.length !== 5 ||
      !/^\d+$/.test(formValues.postalCode)
    ) {
      alert("Veuillez saisir un code postal valide (5 chiffres)");
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
      alert("Veuillez saisir une adresse e-mail valide");
      return;
    }
    if (
      formValues.phoneNumber.length !== 10 ||
      !/^\d+$/.test(formValues.phoneNumber)
    ) {
      alert("Veuillez saisir un numéro de téléphone valide (10 chiffres)");
      return;
    }
    // Envoyer le formulaire par e-mail
    const emailBody = `
      Nom : ${formValues.lastName} ${formValues.firstName}
      Adresse : ${formValues.address}
      Code postal : ${formValues.postalCode}
      Ville : ${formValues.city}
      E-mail : ${formValues.email}
      Téléphone : ${formValues.phoneNumber}
      Produits d'intérêt : ${formValues.interestProduct.join(", ")}
      Message :
      ${formValues.message}
    `;
    window.location.href = `mailto:contact@espacedetente.fr?subject=Demande d'information&body=${encodeURIComponent(
      emailBody
    )}`;
  };

  return (
    <div className="contact-form-container">
      <h2>Formulaire de contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Prénom :
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Adresse :
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Code postal :
          <input
            type="text"
            name="postalCode"
            value={formValues.postalCode}
            onChange={handleChange}
            required
            maxLength={5}
            pattern="[0-9]{5}"
          />
        </label>
        <label>
          Ville :
          <input
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail :
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Téléphone :
          <input
            type="tel"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            required
            maxLength={10}
            pattern="[0-9]{10}"
          />
        </label>
        <div className="form__checkbox-main">
          <label className="form__checkbox-title">
            Produits d'intérêt :
            <br />
            <div className="form__checkbox-choice">
              <label className="form__checkbox-label">
                Spa Softub
                <input
                  className="form__checkbox-input"
                  type="checkbox"
                  name="interestProduct"
                  value="Spa Softub"
                  checked={formValues.interestProduct.includes("Spa Softub")}
                  onChange={handleCheck}
                />
              </label>
              <br />
              <label className="form__checkbox-label">
                Spa Bois Storvatt
                <input
                  className="form__checkbox-input"
                  type="checkbox"
                  name="interestProduct"
                  value="Spa Bois Storvatt"
                  checked={formValues.interestProduct.includes(
                    "Spa Bois Storvatt"
                  )}
                  onChange={handleCheck}
                />
              </label>
              <br />
              <label className="form__checkbox-label">
                Bain Nordique Storvatt
                <input
                  className="form__checkbox-input"
                  type="checkbox"
                  name="interestProduct"
                  value="Bain Nordique Storvatt"
                  checked={formValues.interestProduct.includes(
                    "Bain Nordique Storvatt"
                  )}
                  onChange={handleCheck}
                />
              </label>
            </div>
          </label>
        </div>
        <label>
          Message :
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
