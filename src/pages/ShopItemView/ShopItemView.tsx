import { useLocation } from "react-router-dom"
import ProductImages from "../../components/ProductImages/ProductImages"
import ProductDescriptionForm from "../../components/ProductDescriptionForm/ProductDescriptionForm"

export default function ShopItemView() {
    const locationData = useLocation()

    console.log("ShopItemViewLocationData", locationData)
    return(
        <>
            <ProductImages
                imgUrls={locationData.state.images} 
                itemName={locationData.state.title}
            />
            <ProductDescriptionForm />   
        </>
    )
}