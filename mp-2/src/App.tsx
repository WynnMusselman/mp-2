import {useEffect, useState} from "react";
import Simpsons from "./components/Simpsons.tsx";

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
            <Simpsons data = {data}/>
        </>
    )
}

// export default App

