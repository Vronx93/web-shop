export async function getRandomNumbers(howMany : number, maxNumber : number) {
    const randomNumbers = () => {
        let numbersArray : number [] = []
        for(let i = 0; i < howMany;) {
            const random : number = Math.ceil(Math.random() * maxNumber)
            if(!numbersArray.includes(random))
            numbersArray.push(random)
            i++
        }
        return numbersArray
    }
    return randomNumbers()
}
