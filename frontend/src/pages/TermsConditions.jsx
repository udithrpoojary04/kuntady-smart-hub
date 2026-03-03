import React from 'react';
import { FileText } from 'lucide-react';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="space-y-8 text-gray-600 prose prose-primary max-w-none">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using Smart Kuntady, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                        <p className="mb-4">
                            Smart Kuntady provides users with access to local transportation information, including bus timings,
                            taxi services, and information about famous places in the region. We do not operate the transport services ourselves.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Accuracy of Information</h2>
                        <p className="mb-4">
                            While we strive to provide accurate and up-to-date information regarding transport schedules and places,
                            we cannot guarantee that all information is completely accurate or reflects real-time delays.
                            Users should verify critical timings directly with the transport operators when necessary.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Conduct</h2>
                        <p className="mb-4">
                            Users agree to use Smart Kuntady only for lawful purposes. You agree not to take any action that might
                            compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or the content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Modifications to Service</h2>
                        <p className="mb-4">
                            We reserve the right at any time to modify or discontinue, temporarily or permanently, the service
                            (or any part thereof) with or without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
                        <p className="mb-4">
                            If you have any questions regarding these Terms & Conditions, please contact us at:
                            <br />
                            <strong>Email:</strong> smartkuntady@gmail.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
