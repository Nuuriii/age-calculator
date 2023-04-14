import React from 'react';
import InputDay from './input/input';
import Output from './output/output';
import Button from './button/button';

export default function core() {
    return (
        <div className='mt-9 bg-white ml-5 mr-5 rounded-t-xl rounded-br-3xl rounded-bl-xl pb-10'>
            <InputDay />
            <Button />
            <Output />
        </div>
    );
}
