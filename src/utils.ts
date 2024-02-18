export async function getRandomNumbers(howMany : number, maxNumber : number) {
    const randomNumbers = () => {
        let numbersArray = []
        for(let i = 0; i < howMany; i++) {
            const random = Math.ceil(Math.random() * maxNumber)
            numbersArray.push(random)
        }
        return numbersArray
    }
    return randomNumbers()
}
