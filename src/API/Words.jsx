import {useState, useEffect} from 'react';

export function UseWords() {
    const [words, setWords] = useState([]);

    const [loading, setLoading] = useState(true);   

    let wordList = ['Connoisseur', 'Ambition', 'Passionate', 'Opportunist', ]
    useEffect(() => {
        async function fetchWords(){
            setLoading(true)
            const randomWord = wordList[Math.floor(Math.random()* wordList.length)]
            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ randomWord)
            const data = await response.json()
            // const wordData = data
            setWords(data)
            setLoading(false)
            console.log(words[0].word);
        }
        fetchWords();
    }, [])

    return(
        <>
        {loading?(<p>loading...</p>):(
        <div>
                <h5>Word of Day: <span id="word">{words[0].word}</span></h5>
                {/* {words?.meanings?(<><p>{words[0].meanings[0].definitions[0].definition}</p>|{""}</>):("")} */}

                <p>{words[0].meanings[0].definitions[0].definition}</p>
            </div>
            )}
        </>
    )
}       
