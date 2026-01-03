import React from "react";

const Terms = () => {
  return (
    <div className="bg-base-300 min-h-screen pt-10 px-6">
      <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 mb-10">
        <h1 className="text-3xl font-bold mb-6 text-primary">Terms and Conditions</h1>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-base-content/80 leading-relaxed">
                By accessing and using FinTrack, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
            <p className="text-base-content/80 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on FinTrack's website for personal, non-commercial transitory viewing only.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Disclaimer</h2>
            <p className="text-base-content/80 leading-relaxed">
                The materials on FinTrack's website are provided on an 'as is' basis. FinTrack makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Limitations</h2>
            <p className="text-base-content/80 leading-relaxed">
                In no event shall FinTrack or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FinTrack's website.
            </p>
        </section>

        <p className="text-sm text-base-content/50 mt-8">Last Updated: January 2026</p>
      </div>
    </div>
  );
};

export default Terms;
