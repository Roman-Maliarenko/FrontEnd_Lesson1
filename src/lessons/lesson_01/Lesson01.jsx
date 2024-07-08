import './lesson01.css'

export default function Lesson01() {

    //console.dir(document);

    const heading = 'Lesson 01'
    const classContainer = 'lesson-container'

    function formatName(user){
        return `Name: ${user.name}, lastname ${user.lastname}`
    };

    const user = {
        name: 'John',
        lastname: 'Doe'
    };
    const isLogin = true
    
    return (
    <div className = {classContainer}>
        <h4>{heading}</h4>
        <h5>Особености компонента:</h5>
        <ul>
            <li>Имеет расширение JSX</li>
            <li>Называеться с большой буквы</li>
            <li>Компонент это функция</li>
            <li>Возвращяет верстку</li>
            <li>Использует import / export</li>
            <li>Не отобразится на странице, если не импортирован</li>
        </ul>
        <p>Пример работы с динамическими данными:</p>
        <span>{formatName(user)}</span>
        <h5>Пример условного отобрадения с тернарным  оператором:</h5>
        <span>{isLogin ? 'в данный момент' : 'не'} авторизован</span>
        
    </div>
    );
}
