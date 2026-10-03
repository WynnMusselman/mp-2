import {useEffect, useState} from "react";


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
            {/*switch to TS*/}
            {
                data.map((char: any) =>
                    <div key = {char.id}>
                        <h2>{char.name}</h2>
                        <h3><i>Season {char.season}, Episode {char.episode_number}</i></h3>
                        <img src = {`https://cdn.thesimpsonsapi.com/500${char.image_path}`} alt = {char.name}/>
                        <p>{char.synopsis}</p>
                    </div>
                )
            }
        </>
    )
}

// export default App

