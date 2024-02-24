import { useLocation, useParams, useSearchParams } from "react-router-dom";
import SearchResults from "../../components/SearchResults/SearchResults";

export async function loader() {
    console.log()
}

export default function SearchResultsView() {
    const [params] = useSearchParams('q')

    return(
        <>
            <SearchResults
                searchFor = {params.get("q")}
            />
        </>
    )
}