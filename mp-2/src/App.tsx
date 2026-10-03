import {useEffect, useState} from "react";


export default function App(){

    const[data, setData] = useState<any>([]);

    useEffect(()=> {
        async function fetchData(){
            const rawData = await fetch("https://rickandmortyapi.com/api/character");
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
                        <img src = {char.image} alt = {char.name}/>
                    </div>
                )
            }
        </>
    )
}

// export default App

