import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import api from '../api';
import { Truck, Phone, Navigation, Map, Car } from 'lucide-react';
import AutoRickshawIcon from '../components/icons/AutoRickshawIcon';

const TransportDetails = () => {
    const { t } = useTranslation();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('/transport-services/', { _skipAuth: true });
            setServices(response.data);
        } catch (err) {
            console.error('Error fetching services:', err);
            setError(t('failed_to_load_data') || 'Failed to load transport services. The server might be waking up (can take up to a minute). Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const query = new URLSearchParams(location.search);
    const filterType = query.get('type');

    const getTitle = () => {
        if (filterType === 'TEMPO') return t('tempo');
        if (filterType === 'AUTO') return t('auto');
        if (filterType === 'OTHER') return t('car_taxis');
        return t('transport_services');
    };

    const getServiceIcon = (type) => {
        switch (type) {
            case 'TEMPO': return <Truck className="w-6 h-6 text-primary" />;
            case 'AUTO': return <AutoRickshawIcon className="w-6 h-6 text-yellow-500" />;
            case 'OTHER': return <Car className="w-6 h-6 text-blue-500" />;
            default: return <Truck className="w-6 h-6 text-gray-500" />;
        }
    };

    const typesToShow = filterType ? [filterType] : ['AUTO', 'TEMPO', 'OTHER'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{getTitle()}</h1>

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center p-12 bg-red-50/50 backdrop-blur-sm rounded-2xl border border-red-100 mb-8">
                    <p className="text-red-600 font-medium text-lg text-center mb-6 max-w-lg">{error}</p>
                    <button
                        onClick={fetchServices}
                        className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-md hover:-translate-y-0.5"
                    >
                        {t('retry') || 'Retry'}
                    </button>
                </div>
            ) : (
                <div className="space-y-8">
                    {typesToShow.map(type => {
                        const typeServices = services.filter(s => s.service_type === type);

                        if (typeServices.length === 0) {
                            return filterType ? <p key={type} className="text-gray-500">No services found for {getTitle()}.</p> : null;
                        }

                        return (
                            <div key={type} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                {!filterType && (
                                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                                        <h2 className="text-xl font-bold text-gray-800 flex items-center">
                                            {getServiceIcon(type)}
                                            <span className="ml-3">{type === 'OTHER' ? 'Taxi/Car' : type.charAt(0) + type.slice(1).toLowerCase()}</span>
                                        </h2>
                                    </div>
                                )}
                                <div className="divide-y divide-gray-100">
                                    {typeServices.map(service => (
                                        <div key={service.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex items-start space-x-4">
                                                <div className="p-3 bg-primary/10 rounded-xl hidden md:block">
                                                    {getServiceIcon(service.service_type)}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{service.provider_name}</h3>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                                                        <span className="flex items-center">
                                                            <Navigation className="w-4 h-4 mr-1 text-primary" />
                                                            {service.stand_location}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Map className="w-4 h-4 mr-1 text-primary" />
                                                            {service.service_area}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <a href={`tel:${service.contact_number}`} className="flex items-center justify-center w-full md:w-auto px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg font-medium transition-colors">
                                                    <Phone className="w-4 h-4 mr-2" />
                                                    {service.contact_number}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TransportDetails;
