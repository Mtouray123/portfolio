import {useState, useEffect} from 'react';

export function UseWords() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        async function fetchWords(){
            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
            const data = await response.json()
            // const wordData = data
            setWords(data)
            console.log(data[0].meanings[0].definitions[0].definition);
        }
        fetchWords();
    }, [])

    return(
        <>
        <div>
                <h5>Word of Day:</h5>
                {/* <p>{words[0].meanings[0].definitions[0].definition}</p> */}
                <p>{words.definition}</p>
            </div>
        </>
    )
}
