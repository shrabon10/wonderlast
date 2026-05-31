import DestinationsCard from '@/components/DestinationsCard';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json()
    console.log(destinations);



    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-sky-500 p-5'>All Destinations</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-6'>
                {
                    destinations.map(destination => 
                        <DestinationsCard key={destination._id} destination={destination} />
                    )
                }
            </div>




        </div>
    );
};

export default DestinationsPage;