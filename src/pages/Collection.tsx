import { useEffect, useState } from "react";
import testData from "../../test/test_collection.json";

type Gif = {
    gifURL: string;
    name: string;
    createdDate: string;
};

export default function Collection() {
    const [gifCollection, setGifCollection] = useState<Gif[]>(testData as Gif[]);

    useEffect(() => {
        // Call API
    }, []);

    return (
        <div className="collectionPage">
            <h1>Collection</h1>
            <div className="collectionContainer">
                {gifCollection.map((gif, index) => (
                    <SingleGifDisplay
                        key={index}
                        gifURL={gif.gifURL}
                        name={gif.name}
                        createdDate={gif.createdDate}
                    />
                ))}
            </div>
        </div>
       
    );
}

function SingleGifDisplay({ gifURL, name, createdDate }: Gif) {
    return (
        <div className="contentContainer">
            <img src={gifURL} alt="gif" />
            <p>{name}</p>
            <p>{createdDate}</p>
        </div>
    );
}