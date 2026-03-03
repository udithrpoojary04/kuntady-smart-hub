import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="space-y-8 text-gray-600 prose prose-primary max-w-none">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We collect information you provide directly to us when using Smart Kuntady. This may include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Contact information (Name and email address) and message content when providing feedback or contacting us</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">The information we collect is used solely to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Review your feedback to improve our services (bus timings, famous places info)</li>
                            <li>Respond directly to your comments, questions, and requests</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
                        <p className="mb-4">
                            We implement reasonable measures to help protect your personal information from loss, theft,
                            misuse, unauthorized access, disclosure, alteration, and destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Changes to This Policy</h2>
                        <p className="mb-4">
                            We may change this privacy policy from time to time. If we make changes, we will notify you
                            by revising the date at the top of the policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            <strong>Email:</strong> smartkuntady@gmail.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
