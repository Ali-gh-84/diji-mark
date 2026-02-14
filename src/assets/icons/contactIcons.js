import { MapPin, Phone, Mail } from 'lucide-react';

const contactIconMap = {
    map: MapPin,
    'map-pin': MapPin,
    phone: Phone,
    email: Mail,
    mail: Mail,
};

export function getContactIcon(name) {
    return contactIconMap[name] || Phone;
}

export { contactIconMap };