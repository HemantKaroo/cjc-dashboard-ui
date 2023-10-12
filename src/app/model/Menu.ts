export class Menu {
    public static menu: Array<any> = [
      {
        ah:[{path: "acchead", title: "Loan Disbursment", icon: "pe-7s-graph", class: "" },
        {path: "viewLedger", title: "View Ledger", icon: "pe-7s-graph", class: "" },
      ],
        cm:[{path: "credit", title: "View All Status", icon: "pe-7s-graph", class: "" },],
        oh:[{path: "viewallenq1", title: "View All Enquiry", icon: "pe-7s-graph", class: "" },],
        dc:[{path: "viewallenq", title: "View All Enquiry", icon: "pe-7s-graph", class: "" }, ],
        doc:[
          {path: "docv", title: "View All Customer", icon: "pe-7s-graph", class: "" },
        ],
        registration:[
         
          {path: "viewallenq", title: "View All Enquiry", icon: "pe-7s-graph", class: "" }, 
          {path: "viewoffertletterlist", title: "View Offer Letter List", icon: "pe-7s-graph", class: ""}         
        ],
        customer:[
          {path: "singlecustomer", title: "View Status", icon: "pe-7s-graph", class: "" },
        ],
        //Employee Registration
        bankempreg:[
          {path: "empreg", title: "ADD NEW EMP", icon: "pe-7s-graph", class: "" }         
        ],
        //New Enquiry
        // customerenquiry:[
        //   {path: "enquiry", title: "NEW ENQUIRY", icon: "pe-7s-graph", class: "" }         
        // ],

        product:[
          {path: "addproduct", title: "ADD PROD", icon: "pe-7s-graph", class: "" },
          {path: "viewproduct", title: "VIEW ALL", icon: "pe-7s-graph", class: "" },
          
        ],
        admin: [
          {path: "adminbash", title: "Dashbord", icon: "pe-7s-graph", class: "" },
          {path: "city", title: "Create Student", icon: "pe-7s-graph", class: "" }
      ],
      emp: [
        {path: "empdash", title: "dashbord", icon: "pe-7s-graph", class: "" },
        {path: "demo", title: "Demmmo", icon: "pe-7s-graph", class: "" },
        {path: "./employee/empreg", title: "ADD EMPLOYEE LOGIN", icon: "pe-7s-graph", class: "" },
    ],
  
    operation:[
      {path: "oedash", title: "DASHBORD", icon: "pe-7s-graph", class: "" },
      {path: "oeenq", title: "VIEW ENQUIERY", icon: "pe-7s-graph", class: "" },
      {path: "oecustomer", title: "VIEW CUSTOMER", icon: "pe-7s-graph", class: "" },
      {path: "cibil", title: "CIBILSCORE", icon: "pe-7s-graph", class: "" }
    ],
    relation:[
        {path: "oeenquiry", title: "ENQUERY", icon: "pe-7s-graph", class: "" },
        {path: "oecustomer", title: "REGISTER CUSTOMER", icon: "pe-7s-graph", class: "" },
        {path: "oedocument", title: "UPLOAD DOCUMENT", icon: "pe-7s-graph", class: "" }

      ],
      cr:[{path: "credit", title: "ENQUERY", icon: "pe-7s-graph", class: "" },

      ],
      ab:[{path: "abcdash", title: "DASHBOARD", icon: "pe-7s-graph", class: "" }]
      }
    ];
  }
  