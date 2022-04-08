import axios from "axios";
import React, { useState, useEffect } from "react";

const DogPicture = () => {
    const [imageUrl, setImageUrl] = useState("");

    const fetchDogPic = async () => {
        try {
            const response = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );

            setImageUrl(response.data.message);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchDogPic();
    }, []);

    return (
        <div>
            <img src={imageUrl} alt="A dog" />
        </div>
    );
};

export default DogPicture;
