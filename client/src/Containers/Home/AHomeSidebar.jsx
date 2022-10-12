import React from 'react';
import search from '../../assets/image/search.svg'

export default function AHomeSidebar() {
    return (
        <div>
            <div className="container">
                <button className='mt-3 mb-3 rounded-pill ps-4 pe-4 pb-2 pt-2 mb-5 text-white bg-black border-0 d-flex justify-content-center w-100 fs-6 text-center'>Get unlimited access</button>

                <div className="form-group border rounded-pill pb-1 ps-3 pt-1 mb-5">
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search' className='border-0 outline-0 bg-transparent' />
                </div>

                {/* <h5><span className='border border-light rounded-circle ps-2 pe-2 bg-success'></span>Staff Picks</h5> */}
                <button className='btn btn-sidebar '><span className='bg-success ps-1 pe-1 border border-light rounded-circle me-2'></span>Staff Picks</button>

            </div>
        </div>
    );
}
