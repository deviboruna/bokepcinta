import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
    metadataBase: new URL("https://bokepcinta.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'KWr-poyXowklXg7IOCW6MHlWwx-O7ool_tBkiwobbco',
        yandex: 'd2ef19c18de2aee4',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "logo": "https://bokepcinta.pages.dev/favicon.ico",
        "url": "https://bokepcinta.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepcinta.pages.dev"
            },
            "foundingDate":"2024-04-07"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepcinta.pages.dev",
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepcinta.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
