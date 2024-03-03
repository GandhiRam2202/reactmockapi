import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => { fetchData() }, [])
    const fetchData = async () => {
        await axios.get('https://65d9b31cbcc50200fcdbf430.mockapi.io/details')
            .then(res => setStudents(res.data))
            .catch((err) => { console.log(err); })
    }
    
    return (
        <div className="container">
            <div className="row">
                {students.map((item) => {
                    return (

          
                            <div className="col-sm-12 col-lg-4 col-xl-3 mt-5" key={item.id}>

                                <Card item={item}/>
                            </div>
          
                    )


                })}
            </div>
        </div>
    );
};

export default Home;