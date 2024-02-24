import { useLocation } from "react-router-dom"
import ProductImages from "../../components/ProductImages/ProductImages"
import ProductDescriptionForm from "../../components/ProductDescriptionForm/ProductDescriptionForm"

export default function ShopItemView() {
    const locationData = useLocation()
    const data = locationData.state.item

    console.log("ShopItemViewLocationData", locationData.state, data)
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