import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'de-DE'] as const;
type Locale = typeof locales[number];

const defaultLocale: Locale = 'en';

function getLocale(request: NextRequest): Locale {
    const negotiator = new Negotiator({ headers: { 'accept-language': request.headers.get('accept-language') || '' } });
    const languages = negotiator.languages();
    return match(languages, locales, defaultLocale) as Locale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);

    if (!hasLocale) {
        const locale = getLocale(request);
        request.nextUrl.pathname = `/${locale}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
    }
}

export const config = {
    matcher: ['/((?!_next).*)'],
};
