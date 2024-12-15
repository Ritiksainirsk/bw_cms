const config = {
  // Base URL for the server
  server: 'http://localhost:3000/',
  //server: 'http://assessments.aptitudetest.in/',

  // Firebase configuration object
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  },

  // Main / Backend application link
  link: 'http://localhost:4001/',
  // link: 'https://trn9khfly5.execute-api.ap-south-1.amazonaws.com/demo/',
  // link: 'https://tnvctfykzb.execute-api.ap-south-1.amazonaws.com/dev',

  // link for Temporary Session API calls 
  tmplink: 'http://localhost:4001/api/',
  // tmplink: 'https://218n3w1538.execute-api.ap-south-1.amazonaws.com/uat/api/',

  // Table settings for Admin view
  AdminTableSetting: [
    {
      "field": "name",
      "name": "Name",
      "edit": 2,
      "checked": 1,
      "table_name": "admin",
      "sequence": 1
    },
    {
      "field": "user_name",
      "name": "Username",
      "edit": 1,
      "checked": 1,
      "table_name": "admin",
      "sequence": 2
    },
    {
      "field": "password",
      "name": "Password",
      "edit": 1,
      "checked": 1,
      "table_name": "admin",
      "sequence": 3
    },
    {
      "field": "email",
      "name": "Email Address",
      "edit": 2,
      "checked": 1,
      "table_name": "admin",
      "sequence": 5
    },
    {
      "field": "contact_no",
      "name": "Contact Number",
      "edit": 2,
      "checked": 1,
      "table_name": "admin",
      "sequence": 6
    },
    {
      "field": "total",
      "name": "Total",
      "edit": 2,
      "checked": 1,
      "table_name": "",
      "sequence": 10
    },
    {
      "field": "pending",
      "name": "Pending",
      "edit": 2,
      "checked": 1,
      "table_name": "",
      "sequence": 11
    },
    {
      "field": "completed",
      "name": "Compeleted",
      "edit": 2,
      "checked": 1,
      "table_name": "",
      "sequence": 12
    },
    {
      "field": "yet_to_start",
      "name": "Yet to Start",
      "edit": 2,
      "checked": 1,
      "table_name": "",
      "sequence": 13
    },
    {
      "field": "status",
      "name": "Status",
      "edit": 2,
      "checked": 1,
      "table_name": "admin",
      "sequence": 14
    }
  ],
  // Table settings for Admin view
  PageTableSetting: [
    {
      "field": "title",
      "name": "Page Title",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 1
    },
    {
      "field": "url",
      "name": "Link",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 2
    },
    {
      "field": "modified_date",
      "name": "Last Modified At",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 2
    },

    {
      "field": "status",
      "name": "Status",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 3
    }
  ],

  // Table settings for Admin view
  TemplatesTableSetting: [
    {
      "field": "title",
      "name": "Page Title",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 1
    },
    {
      "field": "url",
      "name": "Link",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 2
    },
    {
      "field": "modified_date",
      "name": "Last Modified At",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 2
    },

    {
      "field": "status",
      "name": "Status",
      "edit": 2,
      "checked": 1,
      "table_name": "pages",
      "sequence": 3
    }
  ],
  // Table settings for Role view
  RoleTableSetting: [
    {
      "field": "role_name",
      "name": "Role Name",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 1
    },
    {
      "field": "type",
      "name": "Role Level",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 2
    },
    {
      "field": "user",
      "name": "User",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 3
    },
    {
      "field": "admin",
      "name": "Admin",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 3
    },
    {
      "field": "organization",
      "name": "Organization",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 4
    },
    {
      "field": "superadmin",
      "name": "Super Admin",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 4
    },
    {
      "field": "Associate",
      "name": "associate",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 5
    },
    {
      "field": "status",
      "name": "Status",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 11
    },
    {
      "field": "created_date",
      "name": "Created Date",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 6
    },
    {
      "field": "modified_date",
      "name": "Last Modified At",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 7
    },
    {
      "field": "coupon",
      "name": "Coupon",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 8
    },
    {
      "field": "examsetting",
      "name": "Exam Setting",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 9
    },
    {
      "field": "requestlist",
      "name": "Request Setting",
      "edit": 1,
      "checked": 1,
      "table_name": "role",
      "sequence": 10
    },
  ],

};
export default config;
