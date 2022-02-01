import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children, data }) => {
    const [itineraries, setItineraries] = useState([]);
    const [legs, setLegs] = useState([]);
    // const [search, setSearch] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
    //         || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    //     setSearchResults(filteredResults.reverse());
    // }, [posts, search]);

    useEffect(() => {
        setItineraries(data.reduce((acc, item) => [...acc, ...item.itineraries], []));
        setLegs(data.reduce((acc, item) => [...acc, ...item.legs], []));
    }, [data]);

    console.log('legs: ', legs);
    console.log('itineraries: ', itineraries);

    return (
      <DataContext.Provider value={{
            itineraries,
            legs,
        }}
      >
        {children}
      </DataContext.Provider>
    );
};

export default DataContext;
