import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { deleteCategory, getCategory } from './api/category';


const CategoryScreen = () => {
  const [Category, setCategory] = useState([]);

  /* useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await getCategory();
      setCategory(data);
    };
    fetchCategory();
  }, []); */ 

  const deleteCategoryHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      deleteCategory(id);
      console.log(id + ' product deleted');
    }
  };

  return (
    <div>
    <h2 className="page-header">Users</h2>
    <Link to="/addnewuser">
      <Button className='my-2'>Add New User</Button>
    </Link>

    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card__body">
            <div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                 
                    <th scope="col">#</th>
              <th scope="col">En Name</th>
              <th scope="col">Ar Name</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
                 
                    </tr>
                  </thead>

                  <tbody>
                   
                      <tr key={index}>
                  
                          <Link to={`/permissions/`}>
                            <i className="bx bx-lock bx-color-fill"></i>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/edituser/`}>
                            <i className="bx bx-pencil"></i>
                          </Link>
                        </td>
                        
                      </tr>
                
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CategoryScreen;
