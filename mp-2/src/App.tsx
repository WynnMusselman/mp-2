import {useEffect, useState} from "react";
import styled from "styled-components";

// styling
const Wrapper = styled.section`
    background-color: #2f64d6;
    text-align: center;
`;

const SiteTitle = styled.h1`
    color: yellow;
    font: calc(2px + 4vw) Papyrus, fantasy;
    margin: 4%;
`;

const EpisodeName = styled.h2`
    margin: 2%;
    color: white;
    font: calc(2px + 3vw) Papyrus, fantasy;
`;

const EpisodeNumber = styled.h3`
    font: italic calc(2px + 2vw) Papyrus, fantasy;
`

const EpisodeDescription = styled.p`
    font: calc(2px + 1.4vw) "Lucida Console", "Courier New", monospace;
`




export default function App(){

    const[data, setData] = useState<any>([]);

    useEffect(()=> {
        async function fetchData(){
            const rawData = await fetch("https://thesimpsonsapi.com/api/episodes");
            const {results} = await rawData.json();

            setData(results)
        }

        fetchData()
            .then(() => console.log("yay! everything works"))
            .catch((e) => console.log("uh oh... " + e));
    }, [data.length]);

    return (
        <Wrapper>

            <SiteTitle>The Simpsons Episodes</SiteTitle>
            {/*switch to TS*/}
            {
                data.map((char: any) =>
                    <div key = {char.id}>
                        <EpisodeName>{char.name}</EpisodeName>
                        <EpisodeNumber>Season {char.season}, Episode {char.episode_number}</EpisodeNumber>
                        <img src = {`https://cdn.thesimpsonsapi.com/500${char.image_path}`} alt = {char.name}/>
                        <EpisodeDescription>{char.synopsis}</EpisodeDescription>

                    </div>
                )
            }
        </Wrapper>
    )
}

// export default App

