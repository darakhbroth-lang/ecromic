import React, { useState } from 'react';
import ContactInput from './ContactInput';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: '', phone: '', email: '', address: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full">
      <form  className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactInput
            id="fullName"
            name="fullName"
            label="ឈ្មោះពេញ (Full Name)"
            placeholder="សុខ ជា"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <ContactInput
            id="phone"
            name="phone"
            type="tel"
            label="លេខទូរស័ព្ទ (Phone)"
            placeholder="012 345 678"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <ContactInput
          id="email"
          name="email"
          type="email"
          label="អ៊ីមែល (Email)"
          placeholder="example@mail.com"
        />

        <ContactInput
          id="address"
          name="address"
          label="អាសយដ្ឋាន (Address)"
          placeholder="ភ្នំពេញ, កម្ពុជា..."
          required
        />

        <ContactInput
          id="message"
          name="message"
          label="សារបន្ថែម (Message)"
          placeholder="បញ្ចូលសាររបស់អ្នកនៅទីនេះ..."

          rows={3}
        />

        <button
          type="submit"
          className="w-50 bg-blue-800  text-white font-medium py-3 rounded-xl transition shadow-sm"
        >
          ផ្ញើសារ (Send Message)
        </button>
      </form>
    </div>
  );
};

export default ContactForm;