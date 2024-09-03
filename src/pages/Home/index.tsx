import {HomeLayout} from "../../layout/HomeLayout"
import {SectionWelcome} from "../../components/SectionWelcome"
import {DoYouKnowAndCuriosity} from "../../components/DoYouKnowAndCuriosity"
import {SectionSearch} from "../../components/SectionSearch"
import {SearchProvider} from "../../context/SearchContext/SearchContext.tsx";
import {SectionSearchResult} from "../../components/SectionSearchResult";
import {SectionDiversity} from "../../components/SectionDiversity";

export const Home = () => {
    return (
        <SearchProvider>
            <HomeLayout>
                <SectionWelcome/>
                <DoYouKnowAndCuriosity/>
                <SectionDiversity/>
                <SectionSearch/>
                <SectionSearchResult/>
            </HomeLayout>
        </SearchProvider>
    )
}
