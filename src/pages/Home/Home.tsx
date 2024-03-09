import { Await, defer, useLoaderData } from "react-router-dom";
import { getShopItemById } from "../../api";
import Hero from "../../components/Hero/Hero";
import { Suspense, useEffect } from "react";
import { getRandomNumbers } from "../../utils";
import ItemsListSlider from "../../components/ItemsListSlider/ItemsListSlider";
import BenefitsList from "../../components/BenefitsList/BenefitsList";

export async function loader() {
    const tenRandomNumbers : number [] = await getRandomNumbers(10, 100)
    const tenRandomItems = tenRandomNumbers.map(async (number : number) =>
        await getShopItemById(number))
    return (defer({dataPromise : tenRandomItems}))
}

export default function Home() {
    const {dataPromise} = useLoaderData()
    
    useEffect(()=>{
        window.scrollTo({top: 0})
    },[])

    return (
        <>
            <Hero />
            <Suspense fallback={<h2>Loading shop items...</h2>}>
                <Await resolve={dataPromise}>
                    {(resolvedData) => (
                        <ItemsListSlider
                            shopItemsData={resolvedData}  
                    />)}
                </Await>
            </Suspense>
        </>
    )
}