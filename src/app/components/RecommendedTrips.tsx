import React from 'react'
import { Trip } from '@prisma/client'
import TripItem from '@/components/TripItem'

const RecommendedTrips = async () => {
    const data = await fetch('http://localhost:3000/hello/').then(res => res.json())
    return (
        <div className='container mx-auto p-5'>
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Destinos Recomendados</h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">
                {data.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    );
};

export default RecommendedTrips

/*
import React, { useEffect, useState } from 'react';
import { Trip } from '@prisma/client';
import TripItem from '@/components/TripItem';

const RecommendedTrips = () => {
    const [data, setData] = useState<Trip[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/hello/');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const tripData = await response.json();
                setData(tripData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='container mx-auto p-5'>
            <div className='flex items-center'>
                <div className='w-full h-[1px] bg-grayLighter'></div>
                <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>
                    Destinos Recomendados
                </h2>
                <div className='w-full h-[1px] bg-grayLighter'></div>
            </div>

            <div className='flex flex-col items-center mt-5 gap-5'>
                {data.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    );
};

export default RecommendedTrips;

*/ 