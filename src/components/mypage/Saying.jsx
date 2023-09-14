export const Saying = () => {
    const proverbs = [
        "잘했고 잘하고 있고 잘할 거야",
        "넌 정말 최고야",
        "누가 뭐라고 해도 할 수 있어",
        "새로운 도전을 응원해!",
        "당신의 노력에 행운도 따르길",
        "다 잘될거야!",
        "온 우주가 널 응원해!",
        "충분히 잘 해낼 수 있어",
        "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
        "하루에 3시간을 걸으면 7년 후에 지구 한 바퀴 돌 수 있다",
        "자신감 있는 표정을 지으면 자신감이 생긴다",
        "작은 기회로부터 종종 위대한 업적이 시작된다",
        "희망만 손에 쥐고 있다면 불가능한 일은 없다"
    ]
    const getRandomIndex = (length) => {
        return parseInt(Math.random() * length)
    }

    return (
        <>
            <h1>{proverbs[getRandomIndex(proverbs.length)]}</h1>
        </>
    )
}

