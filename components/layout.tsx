import React, { Suspense } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import developer from '../app/developer'
import { AnalyticsConfig, GoogleTagManager, Posthog } from './analytics';


const Analytics: React.FC = () => {
    if (process.env.NODE_ENV === 'development') {
        console.log("Analytics not initialized")
        return null;
    }
    return (
        <>
            <Suspense>
                <Posthog />
            </Suspense>
            <Suspense>
                <GoogleTagManager />
            </Suspense>
        </>
    )
}

const DebugBanner: React.FC = () => {
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    return (
        <div className="text-center">
            <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode. GA: {AnalyticsConfig.gtag}</small>
        </div>
    )
}

export default function Layout({ children }) {
    return (
        <>
            <Analytics />
            <>
                <div className="Resume">
                    <DebugBanner />
                    <div className="Resume wrapper">
                        <Sidebar profile={developer.profile}
                            contact={developer.contact}
                            education={developer.education}
                            languages={developer.languages}
                            interests={developer.interests}
                        />
                        <>{children}</>
                    </div>
                    <Footer />
                </div>
            </>
        </>
    );
}