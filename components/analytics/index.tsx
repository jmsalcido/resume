import Script from "next/script"
import React from "react";

export const AnalyticsConfig = {
    "gtag": process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
}


export const GoogleTagManager : React.FC = () => {

    const GTM_ID = AnalyticsConfig.gtag

    if (!GTM_ID) {
        console.log("Google Tag Manager not initialized")
        return null;
    }

    return (
        <>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${GTM_ID}');
  `,
                }}
            />
        </>
    )
}