import React from "react";
import logo from "../../../assets/images/logo.png";
import adminLogo from "../../../assets/images/sidebar-logo.png";
import { FiBell, FiSettings, FiUser, FiLogOut, FiEdit } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Header({ open }) {
  const user = JSON.parse(localStorage.getItem("User"));
  const role = JSON.parse(localStorage.getItem("Role"));

  return (
    <>
      <nav
        className={
          open
            ? "navbar navbar-expand-lg header-pad header"
            : "navbar navbar-expand-lg header "
        }
      >
        <Image src={logo} width={155} height={25} alt="avatar" />
        <ul className="navbar-nav mb-lg-0 listgap align-items-center">
          <li className="nav-item">
            <FiBell
              style={{ width: "22px", height: "22px", color: "#757575" }}
            />
          </li>
          <li className="nav-item">
            <FiSettings
              className="admintitle dropdown-toggle"
              role="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              style={{ width: "22px", height: "22px", color: "#757575" }}
            />
            <ul className="dropdown-menu dropdown-menu-start">
              <li>
                <Link href="#" className="dropdown-item">
                  <FiUser className="svg-icon" style={{ color: "#0b5ed7" }} />{" "}
                  Profile
                </Link>
                <Link href="/dashboard/edit-profile" className="dropdown-item">
                  <FiEdit className="svg-icon" style={{ color: "#0b5ed7" }} />{" "}
                  Edit Account
                </Link>
                <Link href="/logout" className="dropdown-item">
                  <FiLogOut className="svg-icon" style={{ color: "#ea3939" }} />{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown align-items-center">
            <div className="d-flex align-items-center">
              <div className="">
                <span className="admintitle">
                  {user?.name}
                  <p className="adminrole m-0">{role?.role_name}</p>
                </span>
              </div>
              {user?.profile_image ? (
                <Image
                  src={user?.profile_image}
                  className="m-2 adminimg"
                  width={35}
                  height={35}
                  alt="admin-logo1"
                />
              ) : (
                <Image
                  src={adminLogo}
                  className="m-2 adminimg"
                  width={35}
                  height={35}
                  alt="admin-logo"
                />
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
