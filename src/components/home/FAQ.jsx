import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is FinTrack really free?",
      answer: "Yes! Our Basic plan is 100% free and includes all the essential features you need to track your finances."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-grade encryption to ensure your data is safe and private. We never sell your data to third parties."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export your transactions and reports to CSV or PDF formats at any time."
    },
    {
      question: "Do you support multiple currencies?",
      answer: "Currently we support global currencies. You can manage your wallet in your preferred currency."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach out to our support team 24/7 via the help center or email us at support@fintrack.com."
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-base-content/60">Got questions? We've got answers.</p>
        </div>

        <div className="join join-vertical w-full bg-base-200 rounded-3xl overflow-hidden shadow-sm">
            {faqs.map((faq, index) => (
                <div key={index} className="collapse collapse-plus join-item border-b border-base-300/50">
                    <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                    <div className="collapse-title text-xl font-semibold p-6">
                        {faq.question}
                    </div>
                    <div className="collapse-content px-6 pb-6">
                        <p className="text-base-content/70 leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
