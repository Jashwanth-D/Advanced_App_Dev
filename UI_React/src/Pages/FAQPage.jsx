import React from 'react';

const FAQPage = () => {
  // Define an array of FAQ items with questions and answers
  const faqs = [
    {
      question: "What is the check-in time?",
      answer: "The standard check-in time is 2:00 PM."
    },
    {
      question: "Do you allow pets?",
      answer: "Yes, we allow pets in designated rooms. Additional charges may apply."
    },
    {
      question: "Is breakfast included?",
      answer: "Yes, complimentary breakfast is included for all guests."
    },
    {
      question: "Do you offer airport shuttle service?",
      answer: "Yes, we provide airport shuttle service upon request. Please contact our front desk for arrangements."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      {/* Iterate over the faqs array and display each question and answer */}
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;