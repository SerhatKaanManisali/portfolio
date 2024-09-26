interface ServerLocales {
    params: {
        lang: string;
    };
}

interface ClientLocales {
    locales: {
        [key: string]: any;
    };
    lang?: string;
}

interface GridItem {
    title: string;
    description?: string;
    textClassName?: string;
    className: string;
    image?: string;
    spareImage?: string;
    id: number;
    button?: {
        default: string;
        copied: string;
    };
}