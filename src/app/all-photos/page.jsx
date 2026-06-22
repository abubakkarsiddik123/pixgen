import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async({searchParams}) => {
    const {category}=searchParams;
     const res = await fetch("https://pixgen-server-q59l.onrender.com/photos")
    const photos = await res.json();
    const filteredPhotos = category ?  photos.filter(photo =>photo.category.toLowerCase() ==category.toLowerCase()) : photos
    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>All Photos</h2>
            <Category/>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    filteredPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;