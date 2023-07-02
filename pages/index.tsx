
import MainContent from "../components/MainContent/MainContent"
import { NextPageWithLayout } from "./_app"
import resume from "../app/resume"
import Head from "next/head"

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Jose Salcido - Resume</title>
            </Head>
            <MainContent summary={resume.summary}
                experience={resume.experiences}
                projects={resume.projects}
                skills={resume.skills} />
        </>
    )
}

export default Page;