import {useState, useEffect} from 'react';

// fetches a random word from list of words, displays definition from an external API using the API
export function UseWords() {
    //usestate hook used to deine two pieces of state: words and loading
    
    // empty array that holds the data fetched from API
    const [words, setWords] = useState([]);

    // boolean flag set to true to indicate data is being fetched
    const [loading, setLoading] = useState(true);   

    let wordList = ['Connoisseur', 'Ambition', 'Passionate', 'Opportunist', ]
    // hook used to fetch word data from API 
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

    // statement returns 
    return(
        <>
        {loading?(<p>loading...</p>):(
        <div>
                <h5>Word of Day: <span id="word">{words[0].word}</span></h5>
                <p>{words[0].meanings[0].definitions[0].definition}</p>

            </div>
            )}
        </>
    )
}       
