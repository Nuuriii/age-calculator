import React from 'react';

function InputYear() {
    return (
        <div className='flex justify-center gap-1 '>
            <div className='flex flex-col mt-7 '>
                <label className='font-bold'>DAY</label>
                <input
                    type='text'
                    placeholder='DD'
                    className='font-bold border-slate-200 border-2 border-solid w-20 rounded-md h-10 pl-2'
                />
            </div>
            <div className='flex flex-col mt-7'>
                <label className='font-bold'>MONTH</label>
                <input
                    type='text'
                    placeholder='MM'
                    className='font-bold border-slate-200 border-2 border-solid w-20 rounded-md h-10 pl-2'
                />
            </div>
            <div className='flex flex-col mt-7'>
                <label className='font-bold'>YEAR</label>
                <input
                    type='text'
                    placeholder='YYYY'
                    className='font-bold border-slate-200 border-2 border-solid w-20 rounded-md h-10 pl-2'
                />
            </div>
        </div>
    );
}

export default InputYear;
