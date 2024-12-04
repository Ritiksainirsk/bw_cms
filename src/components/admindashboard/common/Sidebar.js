import React, { useState, useEffect } from "react";
import { FiLayers, FiSliders, FiServer, FiMenu, FiHome } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FaBlog } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { checkPermission } from "../../../util/Util";
import {
  CustomRole,
  Admin,
  PageManagement,
  Gallery,
  Blog,
  Template,
} from "../../../util/PermissionIndex";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideBar = ({ open, handleToggleMenu }) => {
  const [toggle, setToggle] = useState({});

  const [customrole, CustomRolePermission] = useState({});
  const [admin, AdminPermission] = useState({});
  const [pagemanagement, PageManagementPermission] = useState({});
  const [gallery, GalleryPermission] = useState({});
  const [blog, BlogPermission] = useState({});
  const [template, TemplatePermission] = useState({});
  const pathname = useRouter();

  const handleToggle = ({ target: { id } }) => {
    if (toggle[id] === true) {
      setToggle({ ...toggle, [id]: false });
    } else {
      setToggle({ ...toggle, [id]: true });
    }
  };
  const role = JSON.parse(localStorage.getItem("Role"));
  useEffect(() => {
    const checkCustomRole = checkPermission(role.customrole, CustomRole);
    CustomRolePermission(checkCustomRole);

    const checkPageManagement = checkPermission(
      role.pagemanagement,
      PageManagement
    );
    PageManagementPermission(checkPageManagement);

    const checkGallery = checkPermission(role.gallery, Gallery);
    GalleryPermission(checkGallery);

    const checkBlog = checkPermission(role.blog, Blog);
    BlogPermission(checkBlog);

    const checkAdmin = checkPermission(role.admin, Admin);
    AdminPermission(checkAdmin);

    const checkTemplate = checkPermission(role.pagemanagement, Template);
    TemplatePermission(checkTemplate);
  }, []);

  return (
    <>
      <nav className={"sidebar expand"}>
        <div className="collapse-side"></div>
        <div className="list-item">
          <FiMenu className="menu-icon" onClick={handleToggleMenu} />
          <Link
            href="/dashboard/user"
            className={
              pathname === "/" ? "sidebar-icon active" : "sidebar-icon"
            }
          >
            <FiHome className="list-icon" />
            <span className="side-tite">Home</span>
          </Link>
          {pagemanagement?.ViewPage ? (
            <Link
              href="/dashboard/pagemanagement"
              className={
                pathname === "/dashboard/pagemanagement"
                  ? "sidebar-icon active"
                  : "sidebar-icon"
              }
            >
              <GoBook className="list-icon" />
              <span className="side-title">Page Management</span>
            </Link>
          ) : (
            ""
          )}
          {gallery?.ViewPage ? (
            <Link
              href="/dashboard/gallery"
              className={
                pathname === "/dashboard/gallery"
                  ? "sidebar-icon active"
                  : "sidebar-icon"
              }
            >
              <TfiGallery className="list-icon" />
              <span className="side-title">Gallery</span>
            </Link>
          ) : (
            ""
          )}
          {blog?.ViewPage ? (
            <Link
              href="/dashboard/blog"
              className={
                pathname === "/dashboard/blog"
                  ? "sidebar-icon active"
                  : "sidebar-icon"
              }
            >
              <FaBlog className="list-icon" />
              <span className="side-title">Blog</span>
            </Link>
          ) : (
            ""
          )}
          {template?.ViewPage ? (
            <Link
              href="/dashboard/template"
              className={
                pathname === "/dashboard/template"
                  ? "sidebar-icon active"
                  : "sidebar-icon"
              }
            >
              <FaBlog className="list-icon" />
              <span className="side-title">Templates</span>
            </Link>
          ) : (
            ""
          )}
          {admin?.ViewPage ? (
            <Link
              href="/dashboard/admin"
              className={
                pathname === "/dashboard/admin"
                  ? "sidebar-icon active"
                  : "sidebar-icon"
              }
            >
              <LiaUsersCogSolid className="list-icon" />
              <span className="side-title">All Admins</span>
            </Link>
          ) : (
            ""
          )}

          {customrole?.ViewPage ? (
            <Link
              href="/dashboard/role"
              className={
                pathname === "/dashboard/role"
                  ? "sidebar-icon active"
                  : "sidebar-icon"
              }
            >
              <FiSliders className="list-icon" />
              <span className="side-title">Roles & Permissions</span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
