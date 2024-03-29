import { useEffect, useState } from "react"
import { useBagItemsContext } from "../contexts/BagItemsContext"

export default function useTotalPrice() {
    const {bagItems} = useBagItemsContext()
    const [totalPrice, setTotalPrice] = useState(0)

    function getTotalPrice() {
        let totalPrice = 0
        if(bagItems.length > 0){
            for(let i = 0; i < bagItems.length; i++) {
                totalPrice += bagItems[i].price * bagItems[i].quantity
            } 
        } return totalPrice
    }

    useEffect(() => {
        if (bagItems.length > 0) {
          setTotalPrice((prevTotalPrice) => {
            const newTotalPrice = getTotalPrice()
            if (prevTotalPrice !== newTotalPrice) {
              return newTotalPrice
            }
            return prevTotalPrice
          })
        }
      }, [getTotalPrice, bagItems])

    return totalPrice
}