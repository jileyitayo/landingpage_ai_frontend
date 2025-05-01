export type User = {
    id: string;
    email: string;
    name: string;
};

export type LandingPageInput = {
    title: string;
    description: string;
    features: string[];
    callToAction: string;
};

export type GeneratedLandingPage = {
    html: string;
    css: string;
    imageUrl: string;
};