import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919014441204';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent(
    'Hello Abhi Groups 1! I found Roamly and would like help with my travel booking.'
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Roamly on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle size={28} strokeWidth={2.2} />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#25D366]" />
    </a>
  );
};
