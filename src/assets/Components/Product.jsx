import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const students = ({setId}) => {
  
    const [students, setstudentss] = useState([])
    const[delet, setDelet] = useState([])

    const navigate = useNavigate()
    useEffect(() => { fetchData() }, [delet])
    const fetchData = async () => {
        await axios.get('https://65d9b31cbcc50200fcdbf430.mockapi.io/details')
            .then(res => setstudentss(res.data))
            .catch((err) => { console.log(err); })
    }

    const handleEdit=(id)=>{
        setId(id)
        navigate(`/edit/${id}`)
    }

    const handleDel = async (id) => {

      await axios.delete(`https://65d9b31cbcc50200fcdbf430.mockapi.io/details/${id}`)
      .then(res=>setDelet(res.data))
      .catch((err)=>{console.log(err)})
      navigate('/products')
    }
    return (
      <>
        <div className="container user">
      <div className="table-responsive">
        <table className="table table-striped mt-4">
          <thead>
            <tr className="table-primary">
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Blood</th>
              <th scope="col">Phone</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => (
              <tr className="table-success" key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.mail}</td>
                <td>{item.blood}</td>
                <td>{item.phone}</td>
                <td>
                  <button className='btnUpdate' onClick={()=>{handleEdit(item.id)}}>Update</button>
                </td>
                <td>
                  <button className='btnDelete' onClick={()=>{handleDel(item.id)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
    );
};

export default students;
