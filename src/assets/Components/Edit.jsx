import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ id }) => {
    const navigate = useNavigate();
    const [editData, setEditData] = useState({ 
        name: '',
        phone: '',
        mail: '',
        address: '',
        blood: ''
    });
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get(`https://65d9b31cbcc50200fcdbf430.mockapi.io/details/${id}`)
            .then(res => setEditData(res.data))
            .catch(err => console.log(err));
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setEditData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        
         await axios.put(`https://65d9b31cbcc50200fcdbf430.mockapi.io/details/${id}`, editData)
         .catch((err)=>console.log(err));
         navigate('/products');
        };
         
         

    return (

      
        
        <div className='container'>

<form  onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="htmlFor form-label fw-bolder">Name</label>
            <input type="text" name='name' value={editData.name} className="form-control" id="htmlFor" onChange={handleChange} required/>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bolder">Mail</label>
            <input type="text" name='mail' value={editData.mail} className="form-control" id="htmlFor" onChange={handleChange} required/>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bolder">Phone</label>
            <input type="text" name='phone' value={editData.phone} className="form-control" id="htmlFor" onChange={handleChange} required/>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bolder">Blood</label>
            <input type="text" name='blood' value={editData.blood} className="form-control" id="htmlFor" onChange={handleChange} required/>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bolder">Address</label>
            <input type="text" name='address' value={editData.address} className="form-control" id="htmlFor" onChange={handleChange} required/>
          </div>
          <div className="col-sm-12 d-flex justify-content-center">
                    <button type='submit' className='create'>Update</button>
                </div>
          
        </form>
</div>



    );
};

export default Edit;
