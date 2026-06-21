import React from 'react';
import PhotoCard from './PhotoCard';

const TopGanarations =async () => {
    const res = await fetch("http://localhost:3000//data.json")
    const photos = await res.json();
    const topPhotos = photos.slice(0,8)
    console.log(topPhotos);
    return (
        <div>
            <h1 className='text-2xl font-bold my-5 '>Top Image Generations</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    topPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default TopGanarations;