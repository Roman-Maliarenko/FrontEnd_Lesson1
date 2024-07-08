export default function Counter() {
    // let count = 0

    // const handlePlus = () => {
    //     count ++
    //     console.log(count);
    // }

    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(prev => prev + 10)

        const handleMinus = () => {
            setCount(prev => prev - 10)
    }
    return (
        <div className="lesson-container">
            <h4>Counter</h4>
            <div>
            <span>(count)</span>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            </div>
            <p>Мы не можем хранить изменяемое данные в
                реакт в класических переменных, потому что мы не будем
                видеть их изминение на странице: компонент не будет обновлться</p>
                <p>В каких же случиях происходит обновлеие данных?🤨 </p>
                <p>Мне нужна 'хитрая' переменная при изминение которой
                    будет происходить обновление компонента</p>
                <ol>
                <li>Изминения состояния (state)</li>
                <li>Изминение props</li>
                </ol>
                <p>Состояние или state - это особая переменная с данными
                    в react изминение которой вызывает обновление комронента</p>
                    <p>Для создания состояния мы используем встроеную в react фунцуыю
                        useState(). Такие внутриние разные страндартные функции называеться хуками самые позные и часто
                        встречающиеся задачи. Например, хранение изминяемых задач</p>
            <span>0</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
}