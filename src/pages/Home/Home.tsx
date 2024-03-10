import { Await, defer, useLoaderData } from "react-router-dom";
import { getShopItemById } from "../../api";
import Hero from "../../components/Hero/Hero";
import { Suspense, useEffect } from "react";
import { getRandomNumbers } from "../../utils";
import ItemsListSlider from "../../components/ItemsListSlider/ItemsListSlider";
import { Product } from "../../components/SearchResults/SearchResults";

export async function loader() {
    const tenRandomNumbers : number [] = await getRandomNumbers(10, 100)
    const tenRandomItems = tenRandomNumbers.map(async (number : number) =>
        await getShopItemById(number))
    return (defer({randomItems : tenRandomItems}))
}

export default function Home() {
    const dataPromise = useLoaderData() as {randomItems : Product[]}

    useEffect(()=>{
        window.scrollTo({top: 0})
    },[])

    return (
        <>
            <Hero />
            <Suspense fallback={<h2>Loading shop items...</h2>}>
                <Await resolve={dataPromise.randomItems}>
                    {(randomItems) => (
                        <ItemsListSlider
                            shopItemsData={randomItems}  
                    />)}
                </Await>
            </Suspense>
        </>
    )
}