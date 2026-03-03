import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Bus, MapPin, Truck, ArrowRight, Star } from 'lucide-react';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { motion } from 'framer-motion';

const Home = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-slate-50">
            <AnnouncementBanner />

            {/* Stunning Ambient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-accent/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm mb-8">
                        <Star className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-semibold text-gray-800">Your Smart Transport Hub</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
                        {/* Explore With */}
                        <br />
                        <span className="text-gradient drop-shadow-sm">
                            {t('app_title')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('welcome_message')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/buses" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg hover:shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:scale-105 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center group">
                            Find Buses <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/places" className="px-8 py-4 bg-white/80 backdrop-blur-md text-gray-900 border border-gray-200/50 hover:border-gray-300 rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-lg w-full sm:w-auto flex items-center justify-center">
                            Explore Places
                        </Link>
                    </div>
                </motion.div>

                {/* Bento Box Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
                >
                    {/* Big Bus Timings Tile */}
                    <motion.div variants={itemVariants} className="md:col-span-2 relative group overflow-hidden rounded-3xl glass-card">
                        <img
                            src="/images/bus_transport.png"
                            alt="Bus Transport"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary/20 to-transparent"></div>
                        <Link to="/buses" className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="p-4 bg-primary/20 backdrop-blur-md rounded-2xl w-max mb-6 border border-white/20">
                                <Bus className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{t('bus_timings')}</h2>
                            <p className="text-gray-200 text-lg flex items-center group-hover:text-primary-light transition-colors">
                                View accurate schedules <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </p>
                        </Link>
                    </motion.div>

                    {/* Famous Places Tile */}
                    <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl glass-card">
                        <img
                            src="/images/famous_places_original.jpeg"
                            alt="Beautiful Landscape"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/40 to-transparent mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/60 via-secondary/20 to-transparent"></div>
                        <Link to="/places" className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="p-4 bg-secondary/20 backdrop-blur-md rounded-2xl w-max mb-6 border border-white/20">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{t('famous_places')}</h2>
                            <p className="text-gray-200 text-lg group-hover:text-white transition-colors">Discover the beauty of Kuntady and nearby attractions.</p>
                        </Link>
                    </motion.div>

                    {/* Transport Details Small Tile */}
                    <motion.div variants={itemVariants} className="md:col-span-1 relative group overflow-hidden rounded-3xl glass-card">
                        <img
                            src="/images/modern_transport.png"
                            alt="Transport Vehicles"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/90 via-accent-dark/40 to-transparent mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/60 via-accent/20 to-transparent"></div>
                        <Link to="/transport" className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl w-max mb-6 border border-white/20">
                                <Truck className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{t('transport_services')}</h2>
                            <p className="text-white/90 flex items-center">Local Taxis, Rickshaws & Tempos <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></p>
                        </Link>
                    </motion.div>

                    {/* Contact/Support Tile */}
                    <motion.div variants={itemVariants} className="md:col-span-1 relative group overflow-hidden rounded-3xl glass-card bg-white">
                        <Link to="/feedback" className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                                <span className="text-2xl">💬</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Have Feedback?</h2>
                            <p className="text-gray-500">We'd love to hear from you to improve our services.</p>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default Home;
