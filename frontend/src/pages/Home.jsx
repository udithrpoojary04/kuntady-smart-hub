import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Bus, MapPin, Truck } from 'lucide-react';

const Home = () => {
    const { t } = useTranslation();

    const FeatureCard = ({ to, icon: Icon, title, colorClass, delay }) => (
        <Link
            to={to}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            style={{ animationDelay: delay }}
        >
            <div className={`p-4 rounded-full mb-6 ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-8 h-8 ${colorClass.replace('bg-', 'text-')}`} />
            </div>
            <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">
                {title}
            </h3>
        </Link>
    );

    return (
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="text-center max-w-4xl relative z-10 px-4">
                <div className="animate-fade-in">
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                            {t('app_title')}
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed">
                        {t('welcome_message')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
                    <FeatureCard
                        to="/buses"
                        icon={Bus}
                        title={t('bus_timings')}
                        colorClass="bg-primary"
                        delay="0.1s"
                    />
                    <FeatureCard
                        to="/transport"
                        icon={Truck}
                        title={t('transport_services')}
                        colorClass="bg-accent"
                        delay="0.2s"
                    />
                    <FeatureCard
                        to="/places"
                        icon={MapPin}
                        title={t('famous_places')}
                        colorClass="bg-secondary"
                        delay="0.3s"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
