import React, { useState } from 'react';
import Catergories from './Categories'


const Category = () => {
    const [data, setData] = useState(Catergories);
    
    const filterResult = (catItem) => {
        const result = Catergories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
return (
        <>
            <div className=" t1 ">FLEXAGN</div>
            <div className="container">
                <form className="nosubmit">
                    <input className="nosubmit" type="search" 
                    placeholder="Search for comics,stories,videos or any game" />
                </form>
            </div>
            <div className='container-fluid mx-2'>
                <div className='col mt-5 mx-5 mb-4'>
                    <div className='row-md-2'>
                        <button className='btn btn-warning m-2' onClick={() => setData(Catergories)}>All</button>
                        <button className='btn btn-warning m-2' onClick={() => filterResult('Videos')}>Videos</button>
                        <button className='btn btn-warning m-2' onClick={() => filterResult('comics')}>comics</button>
                        <button className='btn btn-warning m-2' onClick={() => filterResult('Infographic')}>Info Graphics</button>
                        <button className='btn btn-warning m-2' onClick={() => filterResult('Games')}>Games</button>
                        <button className='btn btn-warning m-2' onClick={() => filterResult('Stories')}>Stories</button>
                    </div>
                    <div className='col-md-9 w-10 h-10'>
                        <div className='row'>
                            {data.map((values) => {
                                const {id, title, description, image } = values;
                                return (
                                    <>
                                        <div className='row-md-4' key={values.id}>
                                            <div className="row g-0 m-4">
                                                <div className="col-md-4">
                                                    <img src={image}
                                                        alt="Trendy Pants and Shoes"
                                                        className="img-fluid rounded-start" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{title}</h5>
                                                        <p className="card-text col-mt-4">{description}
                                                            {/* This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer. */}
                                                        </p>
                                                        <p className="card-text">
                                                            <small className="text-muted">story  </small>
                                                            <small className="text-muted m-4">hindi </small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        
            
        </>
    )
}

export default Category;
