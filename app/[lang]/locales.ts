export const getDictionary = async (locale: string): Promise<{ [key: string]: any }> => {
    switch (locale) {
        case 'en':
            return (await import('./locales/en.json')).default;
        case 'de-DE':
            return (await import('./locales/de.json')).default;
        default:
            return (await import('./locales/en.json')).default;
    }
};
