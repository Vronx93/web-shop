import { useLocation, useSearchParams } from "react-router-dom";
import SearchResults from "../../components/SearchResults/SearchResults";
import { getAllCategories } from "../../api";
import { useEffect } from "react";

export async function loader() {
    const categories = await getAllCategories()
    console.log("Loader CATEGORIES", categories)
}

export default function SearchResultsView() {
    const [queryParams] = useSearchParams('q')
    const [categoryParams] = useSearchParams('category')
    const locationData = useLocation() // data from category filter

    useEffect(()=>{
        window.scrollTo({top: 0})
    },[])

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