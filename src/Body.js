import { useState } from "react";
import RestroCard from "./RestroCard";
import { RestroList } from "../mockData/Restrocarddata";

const Body = () => {
    const [listrestro , setListrestro]=useState(RestroList);
    console.log(listrestro);
    const sortAlphabetically = () => {
        const sorted = [...listrestro].sort((a, b) =>
          a.description.localeCompare(b.description)
        );
        setListrestro(sorted);
      };

    const clear = () => {
        setListrestro(RestroList);
    }
    
    return (
        <div className="body-container page-width">
           <div className="sort">
           <button onClick={sortAlphabetically}>Sort Alphabetically</button>
            <button onClick={clear}>Clear</button>
           </div>
            <div className="restrolist-container">
            {listrestro.map((restro) => (
                <RestroCard key={restro.id} restro={restro} />
                ))}
            </div>
        </div>
    )
}

export default Body;