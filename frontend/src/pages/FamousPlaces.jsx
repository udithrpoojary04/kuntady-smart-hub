import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../api';
import { MapPin, ExternalLink } from 'lucide-react';

const FamousPlaces = () => {
    const { t } = useTranslation();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        try {
            const response = await api.get('/places/', { _skipAuth: true });
            setPlaces(response.data);
        } catch (error) {
            console.error('Error fetching places:', error);
            // Mock
            setPlaces([
                { id: 1, name: 'Palace', description: 'Historical palace built in 19th century.', image: null, location_url: 'https://maps.google.com' },
                { id: 2, name: 'Central Park', description: 'Large public park with beautiful gardens.', image: null, location_url: 'https://maps.google.com' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('famous_places')}</h1>

            {loading ? <p>Loading...</p> : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {places.map(place => (
                        <div key={place.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                {place.image ? (
                                    <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                                ) : (
                                    <MapPin className="w-12 h-12 text-gray-400" />
                                )}
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{place.name}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{place.description}</p>
                                {place.location_url && (
                                    <a href={place.location_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-blue-700 font-medium">
                                        View on Map <ExternalLink className="w-4 h-4 ml-1" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FamousPlaces;
