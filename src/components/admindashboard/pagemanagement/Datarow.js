import React, { useEffect } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import {
  FiCopy,
  FiEdit,
  FiShield,
  FiUsers,
  FiTrash2,
  FiList,
  FiUploadCloud,
  FiCheckCircle,
  FiSlash,
} from "react-icons/fi";
import { Dropdown } from "bootstrap";
import { format } from 'date-fns';

import adminLogo from "../../../assets/images/user-profile.jpg";
import { Const } from "../../../util/Constants";

const Datarow = ({
  rows,
  columns,
  handleStatusAction,
  handleAddEditToggle,
  isPermission,
  handleDuplicate,
  handleUpdatePermissionToggle,
  handleUserList,
  handleAdminList,
  setRowsId,
  handlePageDataEdit
}) => {
  useEffect(() => {
    // Initialize all dropdowns
    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach(element => {
      new Dropdown(element);
    });
  }, [rows]); // Re-initialize when rows change

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case Const.Active:
        return "text-success";
      case Const.Inactive:
        return "text-danger";
      case Const.Draft:
        return "text-warning";
      case Const.Trash:
        return "text-danger";
      default:
        return "";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    try {
      return format(new Date(dateString), 'dd/MM/yyyy HH:mm');
    } catch (error) {
      return "-";
    }
  };

  const datarows = rows.map((item, i) => {
    const row = columns.map((col_item, col_i) => {
      if (col_item["field"] === "status") {
        return (
          <td key={col_i}>
            <span className={getStatusColor(item["status"])}>
              {item["status"] || "-"}
            </span>
          </td>
        );
      } else if (col_item["field"] === "name") {
        return (
          <td key={col_i}>
            <div className="d-flex align-items-center">
              <img
                src={item.profile_path || adminLogo}
                alt={`${item.name}'s profile`}
                className="rounded-circle mr-2"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              {item[col_item["field"]]}

            </div>
          </td>
        );
      } else if (col_item["field"] === "updatedAt") {
        return (
          <td key={col_i}>
            {formatDate(item[col_item["field"]])}
          </td>
        );
      } else {
        return <td key={col_i}>{item[col_item["field"]]}</td>;
      }
    });

    const CurrentStauts = columns.map((col_item, col_i) => {
      if (col_item["field"] === "status") {
        return (
          <>
          {/* ----- */}
            {/* Edit Content Button */}
            <li key={`edit-content-${item.id}`}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => handlePageDataEdit(item)}
              >
                <FiEdit
                  style={{
                    color: "#2196f3",
                    width: "22px",
                    height: "22px",
                    marginRight: "6px",
                  }}
                />{" "}
                Edit Content
              </button>
            </li>
            {/* --------- */}
            {item["status"] !== Const.Active && isPermission?.Active ? (
              <li key={`status-active-${item.id}`}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleStatusAction(item.id, Const.Active)}
                >
                  <FiCheckCircle
                    style={{
                      color: "#079640",
                      width: "22px",
                      height: "22px",
                      marginRight: "6px",
                    }}
                  />{" "}
                  Publish
                </button>
              </li>
            ) : (
              ""
            )}
            {item["status"] !== Const.Inactive && isPermission?.Inactive ? (
              <li key={`status-inactive-${item.id}`}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleStatusAction(item.id, Const.Inactive)}
                >
                  <FiSlash
                    style={{
                      color: "#ea3939",
                      width: "22px",
                      height: "22px",
                      marginRight: "6px",
                    }}
                  />{" "}
                  Unpublish
                </button>
              </li>
            ) : (
              ""
            )}
            {item["status"] !== Const.Draft && isPermission?.Draft ? (
              <li key={`status-draft-${item.id}`}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleStatusAction(item.id, Const.Draft)}
                >
                  <FiUploadCloud
                    style={{
                      color: "#7e8103",
                      width: "22px",
                      height: "22px",
                      marginRight: "6px",
                    }}
                  />{" "}
                  Draft
                </button>
              </li>
            ) : (
              ""
            )}
            {item["status"] !== Const.Trash && isPermission?.Delete ? (
              <li key={`status-trash-${item.id}`}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleStatusAction(item.id, Const.Trash)}
                >
                  <FiTrash2
                    style={{
                      color: "#ea3939",
                      width: "22px",
                      height: "22px",
                      marginRight: "6px",
                    }}
                  />{" "}
                  Trash
                </button>
              </li>
            ) : (
              ""
            )}
          </>
        );
      }
    });

    
    return (
      <tr key={item.id}>
        <td>
          <input
            className="form-checkbox form-check-input"
            type="checkbox"
            id="remember"
          />
        </td>
        {row} 
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-link p-0 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaEllipsisVertical className="ellipsis" />
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              {isPermission?.Edit ? (
                <li key={`edit-seo-${item.id}`}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleAddEditToggle(item.id)}
                  >
                    <FiEdit
                      style={{
                        color: "#0d7bdb",
                        width: "20px",
                        height: "20px",
                        marginRight: "7px",
                      }}
                    />
                    Edit SEO Details
                  </button>
                </li>
              ) : (
                ""
              )}
              {isPermission?.Edit ? (
                <li key={`edit-structure-${item.id}`}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleAddEditToggle(item.id)}
                  >
                    <FiEdit
                      style={{
                        color: "#0d7bdb",
                        width: "20px",
                        height: "20px",
                        marginRight: "7px",
                      }}
                    />
                    Edit StructureDetails
                  </button>
                </li>
              ) : (
                ""
              )}
              {isPermission?.Edit ? (
                <li key={`edit-content-${item.id}`}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handlePageDataEdit(item.id)}
                  >
                    <FiEdit
                      style={{
                        color: "#0d7bdb",
                        width: "20px",
                        height: "20px",
                        marginRight: "7px",
                      }}
                    />
                    Edit Content
                  </button>
                </li>
              ) : (
                ""
              )}
              {CurrentStauts}
              {isPermission?.CreateDuplicate ? (
                <li key={`duplicate-${item.id}`}>
                  <button
                    className="dropdown-item"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#duplicateModal"
                    onClick={() => setRowsId(item.id)}
                  >
                    <FiCopy
                      style={{
                        color: "#01a011",
                        width: "20px",
                        height: "20px",
                        marginRight: "7px",
                      }}
                    />
                    Duplicate
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </td>
      </tr>
    );
  });

  return <>{datarows}</>;
};

export default Datarow;
