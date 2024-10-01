import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/app/[lang]/theme-provider";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
    title: "Serhat Kaan Manisali",
    description: "Take a look at my projects!",
};

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'de' }];
}

export default function RootLayout({ children, lang }: Readonly<RootParams>) {
    return (
        <html lang={lang}>
            <body className={`${roboto}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};