import React from 'react';
import Icon from '/src/assets/img/icon.svg';

function Button() {
    return (
        <div className='flex justify-center'>
            <div className='m-5 flex justify-center'>
                <hr className='' />
                <button>
                    <img
                        className='bg-purple-600 rounded-full p-1'
                        src='./src/assets/img/icon.svg'
                        alt=''
                    />
                </button>
            </div>
        </div>
    );
}

export default Button;
