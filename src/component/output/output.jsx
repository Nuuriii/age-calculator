import React from 'react';

function Output() {
    return (
        <div className='flex flex-col justify-start ml-3 '>
            <div className='flex gap-1 text-5xl'>
                <p className='text-purple-900'>--</p>
                <p className='font-bold'>year</p>
            </div>
            <div className='flex gap-1 text-5xl'>
                <p className='text-purple-900'>--</p>
                <p className='font-bold '>month</p>
            </div>
            <div className='flex gap-1 text-5xl'>
                <p className='text-purple-900'>--</p>
                <p className='font-bold'>day</p>
            </div>
        </div>
    );
}

export default Output;
