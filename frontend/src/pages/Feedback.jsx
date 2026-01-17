import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../api';
import { Send, CheckCircle, User, Mail, MessageSquare } from 'lucide-react';

const Feedback = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/feedback/', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('Error submitting feedback:', err);
            setError('Failed to submit feedback. Please try again.');
        }
    };

    if (submitted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
                <div className="glass-card p-10 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in border border-white/50">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
                    <p className="text-gray-600 mb-8">Your feedback helps us improve our services for everyone.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all"
                    >
                        Submit Another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] -z-10 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">{t('feedback')}</h1>
                    <p className="text-gray-500 text-lg">We'd love to hear your thoughts and suggestions</p>
                </div>

                <div className="glass-card rounded-2xl shadow-2xl p-8 md:p-12 border border-white/60 animate-slide-up relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50 focus:bg-white backdrop-blur-sm"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50 focus:bg-white backdrop-blur-sm"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Message</label>
                            <div className="relative group">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                    <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                </div>
                                <textarea
                                    required
                                    rows="5"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50 focus:bg-white backdrop-blur-sm resize-none"
                                    placeholder="How can we improve?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center text-lg"
                        >
                            <Send className="w-5 h-5 mr-3" /> {t('submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
