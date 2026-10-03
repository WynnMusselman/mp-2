import {useEffect, useState} from "react";
import styled from "styled-components";

//for my custom font
import { createGlobalStyle } from 'styled-components';
import SimpsonFont from './assets/Simpsonfont-p07r.ttf';


// styling

const PageWrapper = styled.section`
    background-color: #2f64d6;
    text-align: center;
    width: 100%;
    margin: auto;
`;


const EpisodeWrapper = styled.section`
    width: 80%;
    margin: 5% auto;
    border-top: 4px dotted white;
    
`;

const SiteTitle = styled.h1`
    color: yellow;
    font: calc(2px + 4vw) 'SimpsonFont', Papyrus, fantasy;
`;

const EpisodeName = styled.h2`
    color: white;
    font: calc(2px + 3vw) 'SimpsonFont', Papyrus, fantasy;
`;

const EpisodeNumber = styled.h3`
    font: italic calc(2px + 2vw) 'SimpsonFont', Papyrus, fantasy;
`;

const EpisodeDescription = styled.p`
    font: calc(2px + 1.4vw) "Lucida Console", "Courier New", monospace;
`;


// I added the simpsons font by using these tutorials:
// https://medium.com/@zmommaerts/implementing-google-fonts-into-your-react-project-using-styled-components-25e7b80de02d
// https://styled-components.com/docs/api#deprecated-injectglobal
const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'SimpsonFont';
        src: url(${SimpsonFont});
    }
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
        <>
            <Fonts />

            <PageWrapper>

                <SiteTitle>The Simpsons Episodes</SiteTitle>
                {/*switch to TS*/}


                {
                    data.map((char: any) =>
                        <div key = {char.id}>
                            <EpisodeWrapper>
                                <EpisodeName>{char.name}</EpisodeName>
                                <EpisodeNumber>Season {char.season}, Episode {char.episode_number}</EpisodeNumber>
                                <img src = {`https://cdn.thesimpsonsapi.com/500${char.image_path}`} alt = {char.name}/>
                                <EpisodeDescription>{char.synopsis}</EpisodeDescription>
                                <EpisodeDescription>{char.airdate}</EpisodeDescription>
                            </EpisodeWrapper>

                        </div>
                    )
                }


            </PageWrapper>
        </>
    )
}

// export default App

