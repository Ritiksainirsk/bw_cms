// import { useRouter } from "next/router";
'use client'
export default function SectionPage() {
  const router = window.location
//   const { section } = router.query; // Dynamic route parameter

  // Mocked section content
  const content = {
    pageManagement: <h1>Page Management</h1>,
    gallery: <h1>Gallery</h1>,
    blog: <h1>Blog</h1>,
    templates: <h1>Templates</h1>,
    allAdmins: <h1>All Admins</h1>,
    rolesPermissions: <h1>Roles & Permissions</h1>,
  };

  return <div>{content[router] || <h1>Section Not Found</h1>}</div>;
}
