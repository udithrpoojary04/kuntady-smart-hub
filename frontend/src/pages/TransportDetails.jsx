import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../api';
import { Truck, Phone, Navigation } from 'lucide-react';

const TransportDetails = () => {
    const { t } = useTranslation();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await api.get('/transport-services/');
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('transport_services')}</h1>

            {loading ? <p>Loading...</p> : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['AUTO', 'TEMPO', 'OTHER'].map(type => {
                        const typeServices = services.filter(s => s.service_type === type);
                        if (typeServices.length === 0) return null;
                        return (
                            <div key={type} className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">{type}</h2>
                                {typeServices.map(service => (
                                    <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border hover:border-primary transition-colors">
                                        <div className="flex justify-between">
                                            <h3 className="text-lg font-bold">{service.provider_name}</h3>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-mono">{service.contact_number}</span>
                                        </div>
                                        <div className="mt-4 text-sm text-gray-600 space-y-2">
                                            <p className="flex items-center"><Navigation className="w-4 h-4 mr-2" /> Stand: {service.stand_location}</p>
                                            <p className="flex items-center"><Truck className="w-4 h-4 mr-2" /> Area: {service.service_area}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TransportDetails;
