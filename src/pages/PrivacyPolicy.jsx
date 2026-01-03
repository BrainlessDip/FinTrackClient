import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-base-300 min-h-screen pt-10 px-6">
      <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 mb-10">
        <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
        
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="text-base-content/80 leading-relaxed">
                We collect information you provide directly to us when you create an account, update your profile, 
                or add transactions. This allows us to provide personalized financial tracking features.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
            <p className="text-base-content/80 leading-relaxed">
                Your data is used solely to generate your financial reports and dashboard. We do not sell your 
                personal data to third parties. We may use anonymized data to improve our services.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
            <p className="text-base-content/80 leading-relaxed">
                We implement robust security measures to protect your information. However, no method of transmission 
                over the Internet is 100% secure.
            </p>
        </section>

        <p className="text-sm text-base-content/50 mt-8">Last Updated: January 2026</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
