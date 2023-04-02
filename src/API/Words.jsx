import {useState, useEffect} from 'react';

export function UseWords() {
    const [words, setWords] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWords(){
            setLoading(true)
            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
            const data = await response.json()
            // const wordData = data
            setWords(data)
            setLoading(false)
            console.log(data[0].meanings[0].definitions[0].definition);
            console.log(data)
        }
        fetchWords();
    }, [])

    return(
        <>
        {loading?(<p>loading...</p>):(
        <div>
                <h5>Word of Day:</h5>
                {/* {words?.meanings?(<><p>{words[0].meanings[0].definitions[0].definition}</p>|{""}</>):("")} */}

                <p>{words[0].meanings[0].definitions[0].definition}</p>
            </div>
            )}
        </>
    )
}       
