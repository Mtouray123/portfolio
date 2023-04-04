import {useState, useEffect} from 'react';

// fetches a random word from list of words and displays its definition using an external API
export function UseWords() {
    //usestate hook used to define two pieces of state: words and loading
    //state variable words that holdes the fetched data from API,  function setWords to update state
    // useState hook to create state variable with initial value of empty array
    // empty array that holds the data fetched from API
    const [words, setWords] = useState([]);

    // boolean flag set to true to indicate data is being fetched
    const [loading, setLoading] = useState(true);   

    // declares new var and initializes to array of strings
    let wordList = ['Connoisseur', 'Ambition', 'Passionate', 'Opportunist', 'Resilient', 
    'Accomplish', 'Challenge', 'Determination', 'Hope', 'Drive', 'Inspire', 'Fearless', 'Fulfillment',
    'Sacrifice', 'Succeed', 'Success', 'Commitment', 'Dedicate', 'Inspiration', 'Honor']
    
    // fetchWords is defined inside the useeffect hook and contains the logic behing fetching the data
    // hook used to fetch word data from API and called with callback function
    useEffect(() => {
        async function fetchWords(){
    
    // calls function returned by useState to set loading state variable to true
    // indicate to the user data is being fetched from API
            setLoading(true)
    // generates random word from wordlist array using math.floor and math.random expressions
            const randomWord = wordList[Math.floor(Math.random()* wordList.length)]
            // makes request to the API using the fetch method 
            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ randomWord)

            const data = await response.json()

            setWords(data)
        // calls function returned by usestate with argument false to indicate data is fetched
            setLoading(false)
            console.log(data);
        }
        fetchWords();
    }, [])

    // statement contains ternary operator thats checks loading state variable
    // If its true, it displays a loading message, otherwise it displays the fetched data 
    return(
        <>
        {loading?(<p>loading...</p>):(
        <div>
        {/* expression retrieves the word property of first item in words array */}
                <h5>Word of Day: <span id="word">{words[0].word}</span></h5>
            {/*definition accessed which retrieves first definition of first meaning of first item in words array */}
                <p>{words[0].meanings[0].definitions[0].definition}</p>

            </div>
            )}
        </>
    )
}       
