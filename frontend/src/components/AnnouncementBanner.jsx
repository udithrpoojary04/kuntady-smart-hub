import React, { useState, useEffect } from 'react';
import api from '../api';
import { Megaphone, X } from 'lucide-react';

const AnnouncementBanner = () => {
    const [announcement, setAnnouncement] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await api.get('/announcements/');
                // Backend orders by -updated_at, so first active one is the latest
                const activeAnnouncement = response.data.find(a => a.is_active);
                setAnnouncement(activeAnnouncement);
            } catch (error) {
                console.error("Failed to fetch announcements:", error);
            }
        };

        fetchAnnouncement();
    }, []);

    if (!announcement || !isVisible) return null;

    return (
        <div className="w-full max-w-5xl mx-auto mt-4 px-4 animate-slide-down">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 backdrop-blur-md text-white p-4 rounded-xl shadow-lg border border-white/20 flex items-start gap-3 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

                <div className="p-2 bg-white/20 rounded-full shrink-0">
                    <Megaphone className="w-6 h-6 animate-pulse" />
                </div>

                <div className="flex-grow pt-1.5">
                    <p className="font-medium text-lg leading-relaxed">
                        {announcement.message}
                    </p>
                    <p className="text-xs text-white/70 mt-1">
                        {new Date(announcement.updated_at).toLocaleDateString()}
                    </p>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors shrink-0"
                    aria-label="Close announcement"
                >
                    <X className="w-5 h-5 opacity-80" />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;