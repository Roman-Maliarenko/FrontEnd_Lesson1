export default function Homework02(){

    const hobby = 'Volleyball'
    function formatName(person){
        return `Name: ${person.name}, Lastname ${person.lastname}`
    };
        const person = {
            name: 'Roman',
            lastname: 'Maliarenko'
        };
        return(
            <div>
                <h2>{formatName(person)}</h2>
                <h2>Hobbys</h2>
                <h3>{hobby}</h3>
            </div>

        )
}