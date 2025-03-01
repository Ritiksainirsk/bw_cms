import React from "react";
import TableHeader from "./TableHeader";
import Datarow from "./Datarow";
import { Const } from '../../../util/Constants';

const AdminListTable = ({columns, rows, handleStatusAction, handleAddEditToggle, isPermission, handleDuplicate, handleUserList, handleAdminList, isLoadMore, handleLoadMore, setRowsId }) => {
columns = columns.filter(item => {return item.checked === 1});
return (
  <div className="row">
      <div className="col-md-12">
          <div className="tablecard">
              <table className="table table-hover">
                  <thead>
                      <TableHeader columns={columns} />
                  </thead>
                  <tbody>
                      <Datarow 
                        columns={columns} 
                        rows={rows} 
                        handleStatusAction={handleStatusAction} 
                        handleAddEditToggle={handleAddEditToggle} 
                        isPermission={isPermission} 
                        handleDuplicate={handleDuplicate}
                        handleUserList={handleUserList}
                        handleAdminList={handleAdminList}
                        setRowsId={setRowsId}
                        />
                  </tbody>
              </table>
          </div>
      </div>
      {!isLoadMore && Const.Limit < rows.length && (
        <div className="col-md-12 d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-link" onClick={handleLoadMore}>
                Load More
            </button>
        </div>
        )}
  </div>
)
};
export default AdminListTable;
