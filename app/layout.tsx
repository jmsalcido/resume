import Head from 'next/head'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Jose Salcido - Resume</title>
            </Head>
            <>{children}</>
        </>
    )
}