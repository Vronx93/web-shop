import { Await, defer, useLoaderData } from "react-router-dom";
import { getShopItemById } from "../../api";
import Hero from "../../components/Hero/Hero";
import { Suspense } from "react";
import { getRandomNumbers } from "../../utils";
import ItemsListSlider from "../../components/ItemsListSlider/ItemsListSlider";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import BenefitsList from "../../components/BenefitsList/BenefitsList";

export async function loader() {
    const tenRandomNumbers : number [] = await getRandomNumbers(10, 100)
    console.log("loader random Numbers", tenRandomNumbers)
    const tenRandomItems = tenRandomNumbers.map(async (number : number) =>
        await getShopItemById(number))
    console.log("tenRandomItems:", tenRandomItems)

    return (defer({dataPromise : tenRandomItems}))
}

export default function Home() {
    const {dataPromise} = useLoaderData()
    // console.log("itemTitlePromise: ", dataPromise)

    return (
        <>
            <Hero />
            <CategoriesList />
            <Suspense fallback={<h2>Loading shop items...</h2>}>
                <Await resolve={dataPromise}>
                    {(resolvedData) => (
                        <ItemsListSlider
                            shopItemsData={resolvedData}  
                    />)}
                </Await>
            </Suspense>
            <BenefitsList />
        </>
    )
}