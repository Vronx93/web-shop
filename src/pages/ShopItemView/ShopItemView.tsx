import { useLocation } from "react-router-dom"
import ProductImages from "../../components/ProductImages/ProductImages"
import ProductDescriptionForm from "../../components/ProductDescriptionForm/ProductDescriptionForm"
import { useEffect } from "react"

export default function ShopItemView() {
    const locationData = useLocation()
    const data = locationData.state
    
    useEffect(()=>{
        window.scrollTo({top: 0})
    },[])

    return(
        <>
            <ProductImages
                imgUrls={data.images} 
                itemName={data.title}
            />
            <ProductDescriptionForm />   
        </>
    )
}