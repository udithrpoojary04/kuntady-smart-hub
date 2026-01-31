import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bus, MapPin, Truck, MessageSquare, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-6 group">
                            <div className="bg-primary/10 p-2 rounded-xl group-hover:rotate-6 transition-transform">
                                <Bus className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {t('app_title')}
                            </span>
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            Your one-stop destination for all local transportation information. Find bus timings, taxi services, and famous places with ease.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/buses" className="text-gray-500 hover:text-primary flex items-center transition-colors">
                                    <Bus className="w-4 h-4 mr-2" /> {t('bus_timings')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/transport" className="text-gray-500 hover:text-primary flex items-center transition-colors">
                                    <Truck className="w-4 h-4 mr-2" /> {t('transport_services')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/places" className="text-gray-500 hover:text-primary flex items-center transition-colors">
                                    <MapPin className="w-4 h-4 mr-2" /> {t('famous_places')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/feedback" className="text-gray-500 hover:text-primary flex items-center transition-colors">
                                    <MessageSquare className="w-4 h-4 mr-2" /> {t('feedback')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Contact Us</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-500">
                                <Mail className="w-4 h-4 mr-2 text-primary" />
                                <span>smartkuntady@gmail.com</span>
                            </li>
                            <li className="flex items-center text-gray-500">
                                {/* <Phone className="w-4 h-4 mr-2 text-primary" />
                                <span>+91 123 456 7890</span> */}
                            </li>
                        </ul>

                        <h4 className="font-semibold text-gray-900 mb-4 text-sm">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {t('app_title')}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
