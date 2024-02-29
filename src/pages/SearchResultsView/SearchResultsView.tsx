import { useLocation, useSearchParams } from "react-router-dom";
import SearchResults from "../../components/SearchResults/SearchResults";
import { getAllCategories } from "../../api";

export async function loader() {
    const categories = await getAllCategories()
    console.log("Loader CATEGORIES", categories)
}

export default function SearchResultsView() {
    const [queryParams] = useSearchParams('q')
    const [categoryParams] = useSearchParams('category')
    const locationData = useLocation() // data from category filter

    return(
        <>
            <SearchResults
                searchFor = {queryParams?.get("q")}
                category={categoryParams?.get('category')}
                itemsData = {locationData.state}
            />
        </>
    )
}