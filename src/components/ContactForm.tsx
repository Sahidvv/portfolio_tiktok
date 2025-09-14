// components/ContactForm.tsx

import React, { useState } from 'react';
import { translations } from '../locales/translations'; // Ajusta la ruta según tu estructura de carpetas
import { useLanguageStore } from '../store/languageStore';
import { useThemeStore } from '../store/themeStore';

interface FormData {
  Nombre: string;
  Número: string;
  'Correo Electrónico': string;
  Mensaje: string;
  Fecha?: string; // Campo adicional para la fecha
}

const ContactForm: React.FC = () => {
  const { language } = useLanguageStore(); // Asegúrate de tener este store
  const t = translations[language]; // 't' contendrá las traducciones según el idioma
  const { theme } = useThemeStore();
  const [formData, setFormData] = useState<FormData>({
    Nombre: '',
    Número: '',
    'Correo Electrónico': '',
    Mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const getCurrentDatePeru = (): string => {
    const now = new Date();
    const peruTimeOffset = -5 * 60; // Offset en minutos para Perú (GMT-5)
    const localTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + peruTimeOffset * 60000);
    return localTime.toLocaleString('es-PE', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'America/Lima',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formDataWithDate = {
      ...formData,
      Fecha: getCurrentDatePeru(), // Agregar la fecha actual al horario de Perú
    };

    try {
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error('Webhook URL no configurada');
      }
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithDate),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          Nombre: '',
          Número: '',
          'Correo Electrónico': '',
          Mensaje: '',
        });
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error: unknown) {
      console.error('Error:', error);
      setErrorMessage(t.contactForm.errorMessage);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <form onSubmit={handleSubmit} className={`space-y-4 md:space-y-6 ${theme === 'dark' ? 'bg-gray-900 p-4 md:p-6 rounded-md' : 'bg-white p-4 md:p-6 rounded-md'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Campo Nombre */}
          <div>
            <label
              htmlFor="Nombre"
              className={`block text-sm font-medium mb-2 transition-colors duration-500 delay-200 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {t.contactForm.nameLabel}
            </label>
            <input
              type="text"
              id="Nombre"
              name="Nombre"
              value={formData.Nombre}
              onChange={handleChange}
              required
              className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 text-sm md:text-base ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>

          {/* Campo Número */}
          <div>
            <label
              htmlFor="Número"
              className={`block text-sm font-medium mb-2 transition-colors duration-500 delay-200 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {t.contactForm.numberLabel}
            </label>
            <input
              type="tel"
              id="Número"
              name="Número"
              value={formData.Número}
              onChange={handleChange}
              required
              className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 text-sm md:text-base ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>
        </div>

        {/* Campo Correo Electrónico */}
        <div>
          <label
            htmlFor="Correo Electrónico"
            className={`block text-sm font-medium mb-2 transition-colors duration-500 delay-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {t.contactForm.emailLabel}
          </label>
          <input
            type="email"
            id="Correo Electrónico"
            name="Correo Electrónico"
            value={formData['Correo Electrónico']}
            onChange={handleChange}
            required
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 text-sm md:text-base ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        {/* Campo Mensaje */}
        <div>
          <label
            htmlFor="Mensaje"
            className={`block text-sm font-medium mb-2 transition-colors duration-500 delay-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {t.contactForm.messageLabel}
          </label>
          <textarea
            id="Mensaje"
            name="Mensaje"
            value={formData.Mensaje}
            onChange={handleChange}
            required
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 text-sm md:text-base ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            rows={4}
          ></textarea>
        </div>

        {/* Mensajes de Estado */}
        {status === 'error' && (
          <p className="text-red-500 text-sm md:text-base transition-colors duration-500 delay-200">
            {t.contactForm.errorMessage}
          </p>
        )}

        {status === 'success' && (
          <p className="text-green-500 text-sm md:text-base transition-colors duration-500 delay-200">
            {t.contactForm.successMessage}
          </p>
        )}

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-3 md:py-4 px-4 md:px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm md:text-base font-medium ${
            status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status === 'submitting' ? t.contactForm.submitting : t.contactForm.submitButton}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
