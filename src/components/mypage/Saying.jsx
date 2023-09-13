export const Saying = () => {
    const proverbs = ["명언1","명언2","명언3","명언4","명언5","명언6",]
    const getRandomIndex = (length) => {
        return parseInt(Math.random() * length)
    }

    return (
        <>
            <div>{proverbs[getRandomIndex(proverbs.length)]}</div>
        </>
    )
}