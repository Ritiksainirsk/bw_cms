import React from 'react';
import { FaEllipsisVertical } from "react-icons/fa6";
import { FiCopy, FiEdit, FiShield, FiUsers, FiTrash2, FiList, FiUploadCloud, FiCheckCircle, FiSlash } from "react-icons/fi";

import adminLogo from "../../../assets/images/user-profile.jpg";
import { Const } from '../../../util/Constants';
import Link from 'next/link';

const Datarow = ({rows, columns, handleStatusAction, handleAddEditToggle, isPermission, handleDuplicate,handleUpdatePermissionToggle, handleUserList, handleAdminList, setRowsId}) => {
  
  const datarows = rows.map((item, i ) => {
    const row = columns.map((col_item, col_i) => {
      if(col_item['field']==="status"){
        if(item['status']===Const.Active){
          return <td><span className="badge text-bg-success">Active</span></td>
        }else if(item['status']===Const.Inactive){
          return <td><span className="badge text-bg-danger">Inactive</span></td>
        }else if(item['status']===Const.Draft){
          return <td><span className="badge text-bg-warning">Drafted</span></td>
        }else if(item['status']===Const.Trash){
          return <td><span className="badge text-bg-danger">Trash</span></td>
        }
      } else if(col_item['field'] === "name") {
      return (
        <td>
          <div className="d-flex align-items-center">
            <img 
              src={item.profile_path || adminLogo} 
              alt={`${item.name}'s profile`} 
              className="rounded-circle mr-2" 
              style={{width: '30px', height: '30px', marginRight: '10px'}}
            />
            {item[col_item['field']]}
          </div>
        </td>
      );
    }else{
        return <td>{item[col_item['field']]}</td>
      }
    });
    
    const CurrentStauts = columns.map((col_item, col_i) => {
      if(col_item['field']==="status"){
        return (
          <>
          {item['status']!== Const.Active && isPermission?.Active ? 
            <li>
                <button className="dropdown-item" type="button" onClick={() => handleStatusAction(item.id, Const.Active)}><FiCheckCircle style={{color: "#079640", width: "22px", height: "22px", marginRight: "6px"}}/> Active</button>
            </li>
          :""
          }
          {item['status']!== Const.Inactive && isPermission?.Inactive ? 
            <li>
                <button className="dropdown-item" type="button" onClick={() => handleStatusAction(item.id, Const.Inactive)}><FiSlash style={{color: "#ea3939", width: "22px", height: "22px", marginRight: "6px"}}/> Inactive</button>
            </li>
          :""
          }
          {item['status']!== Const.Draft && isPermission?.Draft ? 
            <li>
                <button className="dropdown-item" type="button" onClick={() => handleStatusAction(item.id, Const.Draft)}><FiUploadCloud style={{color: "#7e8103", width: "22px", height: "22px", marginRight: "6px"}}/> Draft</button>
            </li>
          :""
          }
          {item['status']!== Const.Trash && isPermission?.Delete ?
            <li>
                <button className="dropdown-item" type="button" onClick={() => handleStatusAction(item.id, Const.Trash)}><FiTrash2 style={{color: "#ea3939", width: "22px", height: "22px", marginRight: "6px"}}/> Trash</button>
            </li>
          :""
          }
          </>
        )
      }
    });


    return (
      <tr>
      <td><input className="form-checkbox form-check-input" type="checkbox" id="remember"/></td>
      {row}
      <td>
        <div className="btn-group" id="ellipsis">
          <FaEllipsisVertical className="ellipsis dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" />
          <ul className="dropdown-menu dropdown-menu-lg-end">
            
            
            {isPermission?.EditPermission ? 
              <li>
                  <button className="dropdown-item" type="button" onClick={() => handleUpdatePermissionToggle(item.id)}><FiEdit style={{color: "#0d7bdb", width: "20px", height: "20px", marginRight: "7px"}}/> Update Permission</button>
              </li>
            :""
            }
            {isPermission?.Edit ? 
              <li>
                  <button className="dropdown-item" type="button" onClick={() => handleAddEditToggle(item.id)}><FiEdit style={{color: "#0d7bdb", width: "20px", height: "20px", marginRight: "7px"}}/> Edit Details</button>
              </li>
            :""
            }
            {isPermission?.EditTest ?
              <li>
                  <Link href="exam"><button className="dropdown-item" type="button"><FiEdit style={{color: "#0d7bdb", width: "20px", height: "20px", marginRight: "7px"}}/> Edit Tests</button></Link>
              </li>
            :""
            }
            {isPermission?.ViewUserList ?
            <li>
              <button className="dropdown-item" type="button" onClick={() => handleUserList(item.id)} ><FiList style={{color: "#0d7bdb", width: "20px", height: "20px", marginRight: "7px"}}/> Users List</button>
            </li>
            :""
            }
            {CurrentStauts}
            {isPermission?.CreateDuplicate ?
              <li>
                  <button className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#duplicateModal" onClick={() => setRowsId(item.id)}><FiCopy style={{color: "#01a011", width: "20px", height: "20px", marginRight: "7px"}}/> Duplicate</button>
              </li>
            :""
            }
          </ul>
        </div>
      </td>
    </tr>
    )
  });

  return (<>{datarows}</>)
}

export default Datarow;

