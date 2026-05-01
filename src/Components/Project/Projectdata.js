import agri from "../../assets/projects/agri.png"
import car from "../../assets/projects/car-booking.png"
 import microsite from "../../assets/projects/microsite.png"
import quick from "../../assets/projects/quick.png"
import realEstate from "../../assets/projects/nri-connect.png"
import doctor from "../../assets/projects/sk-medic.png"
import skStore from "../../assets/projects/sk-store.png"
import vrDashboardImage from "../../assets/projects/vr.png"
import lead from "../../assets/projects/lead.png"

const projects = [

{
  id: "ai-plant",
  title: "Agri – Smart Farming AI Platform",
  shortDesc:
    "AI-powered smart agriculture platform with plant disease detection, government schemes, market price tracking, farming tutorials, and farmer marketplace.",

  detailedDesc:
    "Agri is a full-stack AI-based agriculture platform designed to empower farmers with technology. It detects plant diseases using leaf image analysis, provides treatment suggestions, displays real-time market prices, showcases government schemes, offers farming tutorial videos, and enables farmers to sell products directly to customers without middlemen.",

  category: "AI / Agriculture / Marketplace",

  modules: {
    diseaseDetection: {
      title: "Plant Disease Detection",
      features: [
        "Leaf image upload (Camera/Gallery)",
        "AI-based disease prediction",
        "Confidence percentage score",
        "Treatment suggestions",
        "Fertilizer recommendations",
        "Weather-based advisory"
      ],
      tech: ["TensorFlow", "Python", "Flask API"]
    },

    farmingVideos: {
      title: "Farming Reference Videos",
      features: [
        "YouTube API integration",
        "Crop-specific tutorials",
        "Organic farming guidance",
        "Irrigation training",
        "Language filter (Tamil/Hindi/English)"
      ]
    },

    governmentSchemes: {
      title: "Government Schemes",
      schemesIncluded: [
        "PM-KISAN",
        "Pradhan Mantri Fasal Bima Yojana",
        "Soil Health Card Scheme",
        "Kisan Credit Card"
      ],
      features: [
        "Eligibility checker",
        "Required documents list",
        "Official apply links",
        "State-wise filtering"
      ]
    },

    marketPrice: {
      title: "Live Market Prices",
      features: [
        "District-wise mandi prices",
        "Crop price listing",
        "Price trend graph",
        "Best selling market suggestion",
        "Future price prediction (ML upgrade)"
      ]
    },

    marketplace: {
      title: "Farmer Marketplace",
      features: [
        "Farmer login & registration",
        "Product upload",
        "Set price & quantity",
        "Order management",
        "Direct customer contact",
        "Online payment integration",
        "No middleman concept"
      ]
    }
  },

  roles: [
    "Farmer",
    "Buyer",
    "Admin"
  ],

  authentication: [
    "JWT Authentication",
    "Role-based access control"
  ],

  techStack: {
    frontend: ["React", "Tailwind CSS"],
    backend: ["Flask / Node.js"],
    database: ["MongoDB / Firebase"],
    aiModel: ["TensorFlow / Keras"],
    payment: ["Razorpay"],
    apiIntegration: ["YouTube API", "Government Data API", "Mandi Price API"]
  },

  futureEnhancements: [
    "Multilingual voice assistant",
    "AI crop yield prediction",
    "Weather API integration",
    "Mobile app version",
    "Blockchain-based supply chain tracking"
  ],

  image: agri,
  liveDemo: "https://agri-lyart-one.vercel.app/",
  github: "https://github.com/SENTHILKUMAR-M25/Agri.git"
},
{
  id: "car-booking",

  title: "Car Booking Platform UI",

  shortDesc:
    "Modern responsive car booking interface inspired by Uber and Booking.com.",

  detailedDesc:
    "A fully responsive and animated car booking frontend application built using React and Tailwind CSS. Users can search cars, filter by category, view car details, select booking dates, and simulate a checkout process. The project focuses on clean UI architecture, smooth animations, reusable components, and modern UX design patterns.",

  category: "Frontend Web Application",

  modules: {
    searchInterface: {
      title: "Search & Filter Interface",
      features: [
        "Location input field",
        "Pickup & return date selection",
        "Car type filters",
        "Price range slider UI",
        "Instant search results rendering"
      ]
    },

    carListing: {
      title: "Car Listing UI",
      features: [
        "Grid & list view toggle",
        "Car detail modal",
        "Pricing display cards",
        "Responsive layout",
        "Animated hover effects"
      ]
    },

    bookingFlow: {
      title: "Booking Flow UI",
      features: [
        "Booking summary panel",
        "Price calculation display",
        "Checkout form UI",
        "Payment UI simulation",
        "Success confirmation screen"
      ]
    },

    adminUI: {
      title: "Admin Dashboard UI",
      features: [
        "Car management interface",
        "Booking list table UI",
        "Revenue analytics cards",
        "Responsive sidebar navigation"
      ]
    }
  },

  techStack: {
    frontend: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router"
    ]
  },

  uiHighlights: [
    "International booking design standard",
    "Mobile-first responsive layout",
    "Reusable component architecture",
    "Smooth scroll animations",
    "Modern glassmorphism UI"
  ],

  futureEnhancements: [
    "API integration with real backend",
    "Stripe payment integration",
    "Live availability system",
    "Dark / Light theme toggle"
  ],

  image: car,

  liveDemo: "car-booking-gilt.vercel.app",
  github: "https://github.com/SENTHILKUMAR-M25/Car-Booking.git"
},
{
  id: "nri-connect-ui",

  title: "NRI Connect – Property & Home Service Platform UI",

  shortDesc:
    "Modern responsive NRI property and home service booking interface with clean marketplace design.",

  detailedDesc:
    "A fully responsive and animated frontend web application designed for Non-Resident Indians to remotely buy, sell, and manage properties in India. The platform also allows users to browse and book verified home services such as plumbing, electrical work, cleaning, and home nursing. This project focuses purely on frontend architecture, reusable UI components, smooth animations, structured layouts, and modern UX patterns.",

  category: "Frontend Web Application",

  modules: {

    propertyMarketplaceUI: {
      title: "Property Marketplace UI",
      features: [
        "Property search interface",
        "Location & price filter UI",
        "Property listing grid layout",
        "Property detail modal page",
        "Seller property posting form UI"
      ]
    },

    serviceBookingUI: {
      title: "Home Service Booking UI",
      features: [
        "Service category cards (Plumbing, Electrical, Cleaning, Nursing)",
        "Worker profile cards with ratings",
        "Date & time selection UI",
        "Booking summary panel",
        "Confirmation success screen"
      ]
    },

    workerDashboardUI: {
      title: "Worker Dashboard UI",
      features: [
        "Job request list UI",
        "Accept / reject buttons",
        "Earnings summary cards",
        "Ratings & feedback display",
        "Responsive sidebar layout"
      ]
    },

    adminDashboardUI: {
      title: "Admin Panel UI",
      features: [
        "User management table UI",
        "Property approval interface",
        "Service request monitoring panel",
        "Revenue analytics cards",
        "Dashboard navigation layout"
      ]
    }
  },

  techStack: {
    frontend: [
      "React / Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons / Lucide Icons"
    ]
  },

  uiHighlights: [
    "Mobile-first responsive layout",
    "Marketplace-style clean design",
    "Modern dashboard interface",
    "Reusable component architecture",
    "Smooth animation transitions",
    "Trust-focused UI elements"
  ],

  futureEnhancements: [
    "Backend API integration",
    "Authentication system",
    "Real-time notifications",
    "Payment UI integration",
    "Dark / Light theme toggle"
  ],

  image: realEstate,

  liveDemo: "https://nri-connect-omega.vercel.app/",
  github: "https://github.com/SENTHILKUMAR-M25/NRI-Connect.git"
},
{
  id: "vr-promotion-experience-platform",

  title: "VR PromoSphere – Immersive Virtual Reality Promotion Platform",

  shortDesc:
    "A futuristic VR Promotion Management Platform designed to manage immersive marketing campaigns, user engagement, and conversion tracking.",

  detailedDesc:
    "VR PromoSphere is a frontend-driven Virtual Reality Promotion Management System built to support immersive brand campaigns, VR property showcases, product demonstrations, and event-based VR activations. The platform enables businesses to monitor user engagement, track interactive sessions, manage promotional campaigns, and simulate conversion analytics. Built using React and Tailwind CSS, this system demonstrates how immersive VR experiences can be transformed into measurable marketing performance through modern UI dashboards and interactive workflows.",

  category: "Virtual Reality Marketing & Promotion Platform (Frontend Simulation)",

  modules: {

    campaignDashboard: {
      title: "VR Campaign Performance Dashboard",
      features: [
        "Total VR campaign sessions overview",
        "Active vs Completed campaign tracking",
        "Engagement heatmap visualization",
        "User interaction duration metrics",
        "Conversion simulation rate",
        "Device type tracking (VR Headset / Mobile / WebVR)"
      ]
    },

    experienceManager: {
      title: "VR Experience Management",
      features: [
        "Create and manage VR campaigns",
        "Assign campaign categories (Real Estate / Product Launch / Event Promotion)",
        "Schedule campaign start & end dates",
        "Campaign performance indicators",
        "Status control (Draft / Live / Completed)"
      ]
    },

    userEngagementAnalytics: {
      title: "User Engagement Insights",
      features: [
        "Session duration tracking",
        "Interaction count per user",
        "Hotspot click analytics",
        "Interest-level classification (High / Medium / Low)",
        "Drop-off rate simulation",
        "Repeat visitor tracking"
      ]
    },

    promotionalLeadTracking: {
      title: "VR Promotion Lead Tracking",
      features: [
        "User registration after VR session",
        "Interest category (Buy / Book Demo / Contact / Subscribe)",
        "Lead scoring system",
        "Follow-up status management",
        "Conversion stage simulation"
      ]
    },

    immersiveUIControls: {
      title: "Immersive Admin Interface",
      features: [
        "Dark-mode neon VR theme",
        "Animated dashboard stat cards",
        "Glassmorphism panels",
        "3D hover interactions",
        "Smooth page transitions using Framer Motion"
      ]
    }
  },

  techStack: {
    frontend: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "Recharts"
    ],
    stateManagement: [
      "React useState",
      "React useReducer",
      "Context API"
    ],
    visualization: [
      "Interactive charts",
      "Animated analytics cards",
      "Campaign progress bars"
    ]
  },

  uiHighlights: [
    "Futuristic VR-inspired dashboard design",
    "Neon gradient lighting effects",
    "Dark immersive UI theme",
    "Animated interaction feedback",
    "Responsive SaaS-style layout",
    "High-conversion promotional interface"
  ],

  businessLogicSimulation: [
    "Mock VR user session dataset",
    "Client-side engagement analytics",
    "Conversion rate simulation",
    "Campaign lifecycle management",
    "Interactive performance metrics",
    "Interest-based segmentation logic"
  ],

  targetUsers: [
    "Marketing Agencies",
    "VR Campaign Managers",
    "Event Promotion Teams",
    "Real Estate Promoters",
    "Product Marketing Teams",
    "Startup Founders"
  ],

  futureEnhancements: [
    "Real VR headset data integration",
    "Backend API & Database connectivity",
    "AI-driven engagement prediction",
    "Real-time live session tracking",
    "Automated marketing email workflows",
    "Campaign ROI analytics dashboard",
    "CRM integration",
    "Multi-user role-based access system"
  ],

  image: vrDashboardImage,

  liveDemo: "https://sk-neuraplay.vercel.app/",
  github: "https://github.com/SENTHILKUMAR-M25/Sk-NeuraPlay.git"
},
{
  id: "sk-lead-management-system",

  title: "SK LeadFlow – Smart Lead Management System",

  shortDesc:
    "A modern CRM dashboard designed to capture, track, manage, and convert business leads efficiently through an interactive sales pipeline.",

  detailedDesc:
    "SK LeadFlow is a frontend-focused Lead Management System built to simulate real-world CRM workflows. The system enables businesses to capture new leads, track engagement, manage follow-ups, and monitor sales pipeline performance. Built using React and Tailwind CSS, this dashboard demonstrates advanced filtering, dynamic status management, lead scoring, and Kanban-based workflow visualization. It is designed as a scalable CRM solution prototype suitable for startups, sales teams, and growing enterprises.",

  category: "Lead Management System (CRM Dashboard – Frontend Only)",

  modules: {

    dashboardAnalytics: {
      title: "Lead Analytics Overview",
      features: [
        "Total leads summary",
        "Daily / Weekly / Monthly lead tracking",
        "Conversion rate statistics",
        "Lead source breakdown (Website / Referral / Social / Ads / Direct)",
        "Performance metric cards",
        "Revenue estimation from converted leads"
      ]
    },

    leadManagementTable: {
      title: "Lead Data Management Table",
      features: [
        "Search by name, email, company, or location",
        "Filter by source (Website / Ads / Referral / Cold Call)",
        "Status filtering (New, Contacted, Follow-up, Qualified, Converted, Lost)",
        "Sortable columns (Date, Source, Company, Priority)",
        "Client-side pagination",
        "Lead priority tags (High / Medium / Low)"
      ]
    },

    leadProfileView: {
      title: "Lead Detailed Profile View",
      features: [
        "Complete lead information display",
        "Company and contact details",
        "Lead source and campaign info",
        "Status update dropdown",
        "Internal notes section",
        "Follow-up scheduling interface",
        "Activity timeline (calls, emails, meetings)"
      ]
    },

    pipelineBoard: {
      title: "Sales Pipeline (Kanban Board)",
      features: [
        "Drag-and-drop lead cards",
        "Columns: New → Contacted → Qualified → Proposal → Converted",
        "Priority-based color indicators",
        "Smooth animated transitions",
        "Simulated pipeline tracking logic"
      ]
    },

    leadCaptureForm: {
      title: "Lead Capture Form",
      features: [
        "Client registration form UI",
        "Source selection dropdown",
        "Priority selection",
        "Form validation states",
        "Submission success animation",
        "Auto lead entry into pipeline"
      ]
    }
  },

  techStack: {
    frontend: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "TanStack Table"
    ],
    stateManagement: [
      "React useState",
      "React useReducer",
      "Context API"
    ]
  },

  uiHighlights: [
    "Modern SaaS-style CRM dashboard",
    "Dark & Light mode support",
    "Interactive Kanban workflow",
    "Animated analytics cards",
    "Responsive admin layout",
    "Professional enterprise UI design"
  ],

  businessLogicSimulation: [
    "Mock lead dataset",
    "Client-side filtering and sorting",
    "Lead scoring system simulation",
    "Conversion rate calculation logic",
    "Pipeline stage transition simulation"
  ],

  targetUsers: [
    "Sales Teams",
    "Startup Founders",
    "Marketing Teams",
    "Business Development Executives",
    "CRM Administrators"
  ],

  futureEnhancements: [
    "Backend API integration",
    "Real-time analytics dashboard",
    "Automated email & SMS follow-ups",
    "Role-based access control",
    "Lead export (CSV / Excel)",
    "AI-based lead scoring",
    "Customer lifecycle tracking"
  ],

  image: lead,

  liveDemo: "#",
  github: "#"
},
 {
  id: "quick-starter",
  title: "Quick — React + Vite Starter",
  shortDesc:
    "Lightweight React starter template built with Vite for fast frontend development.",
  detailedDesc:
    "Quick is a minimal React + Vite starter template configured for rapid frontend development. It includes a clean project structure, ESLint setup, and essential build configs, enabling developers to kickstart UI projects with modern tooling and optimal performance.",
  category: "Frontend Tooling / Template",
  modules: {
    projectsetup: {
      title: "Project Setup & Tooling",
      features: [
        "React with Vite for fast bundling",
        "Hot Module Replacement (HMR)",
        "Pre-configured ESLint rules",
        "Clean folder structure",
        "Vite config optimised for React"
      ]
    },
    starterFeatures: {
      title: "Starter Features",
      features: [
        "React component support",
        "JSX & modern JS tooling",
        "Ready-to-use template",
        "Lightweight and minimal dependencies",
        "Tailwind / CSS support (optional)"
      ]
    }
  },
  techStack: {
    frontend: ["React", "Vite", "JavaScript"],
    tooling: ["ESLint", "Vite Plugin React"]
  },
  uiHighlights: [
    "Fast build time",
    "Minimal boilerplate",
    "Easy to clone and start frontend projects",
    "Clean folder conventions"
  ],
  futureEnhancements: [
    "Add Tailwind CSS / UI library setup",
    "Add routing example (React Router)",
    "Include sample components",
    "Add dark/light theme toggle"
  ],
  image: quick,
  liveDemo: "https://quick-teal.vercel.app", // demo from repo info :contentReference[oaicite:1]{index=1}
  github: "https://github.com/SENTHILKUMAR-M25/Quick"
},
{
  id: "real-estate-microsite",

  title: "Real Estate Portfolio & Property Microsite",

  shortDesc:
    "Professional portfolio website for a real estate agent with dedicated microsite pages for property listings.",

  detailedDesc:
    "A modern, responsive real estate portfolio website built using React and Vite. The project showcases a real estate agent’s profile, featured listings, property details pages, and dedicated microsites for individual properties. It focuses on premium UI design, responsive layout, clean component structure, and conversion-oriented landing sections.",

  category: "Frontend Web Application",

  modules: {
    agentPortfolio: {
      title: "Agent Portfolio Section",
      features: [
        "Agent profile overview",
        "Professional bio section",
        "Experience & achievements",
        "Client testimonials UI",
        "Contact form interface"
      ]
    },

    propertyListing: {
      title: "Property Listing Interface",
      features: [
        "Featured properties grid",
        "Property card components",
        "Filter & search UI",
        "Price & location display",
        "Responsive listing layout"
      ]
    },

    propertyMicrosite: {
      title: "Dedicated Property Microsite",
      features: [
        "Full-width hero image section",
        "Property image gallery",
        "Amenities & specifications layout",
        "Location map embed UI",
        "Inquiry form section"
      ]
    },

    designSystem: {
      title: "UI & Design Implementation",
      features: [
        "Reusable React components",
        "Mobile-first responsive design",
        "Clean typography system",
        "Modern real estate UI aesthetics",
        "Smooth navigation experience"
      ]
    }
  },

  techStack: {
    frontend: [
      "React",
      "Vite",
      "JavaScript",
      "CSS / Tailwind CSS"
    ]
  },

  uiHighlights: [
    "Premium real estate UI layout",
    "Conversion-focused landing sections",
    "Component-based architecture",
    "Fully responsive across devices",
    "Professional business presentation"
  ],

  futureEnhancements: [
    "Dynamic property data integration",
    "CMS integration",
    "Admin panel for listings",
    "Dark / light theme",
    "Advanced search filters"
  ],

  image: microsite,

  liveDemo: "https://microsite-three.vercel.app",
  github: "https://github.com/SENTHILKUMAR-M25/microsite"
},
{
  id: "doctor-booking-ui",
  
  title: "Doctor Appointment Booking UI",
  
  shortDesc:
    "Responsive doctor appointment booking interface with schedule selection and appointment form.",
  
  detailedDesc:
    "A frontend React + Vite application that simulates a doctor appointment booking system. It includes UI screens for browsing doctors, viewing profiles, selecting time slots, and filling out booking details. The project emphasizes clean component structure, responsive design, and user-friendly interfaces, making it ideal for showcasing UI development and form management skills.",
  
  category: "Frontend Web Application",
  
  modules: {
    doctorList: {
      title: "Doctor Listing Screen",
      features: [
        "List of doctors with specialty and ratings",
        "Search & filter UI",
        "Responsive doctor card components",
        "Doctor search input and filter UI",
        "Grid & list layout support"
      ]
    },
    
    doctorProfile: {
      title: "Doctor Profile UI",
      features: [
        "Doctor profile info section",
        "Specialties & experience layout",
        "Ratings & reviews display",
        "Available appointment slots UI",
        "Contact / message section placeholder"
      ]
    },
    
    appointmentFlow: {
      title: "Appointment Booking Flow",
      features: [
        "Select date & time slot",
        "Booking detail input form",
        "Patient info form UI",
        "Validation and error indication",
        "Booking confirmation screen mockup"
      ]
    },
    
    responsiveDesign: {
      title: "Responsive & Interactive UI",
      features: [
        "Mobile-friendly layout screens",
        "Reusable React components",
        "Consistent button & form styles",
        "Navigation bar UI",
        "Clean UX transitions"
      ]
    }
  },
  
  techStack: {
    frontend: [
      "React",
      "Vite",
      "React Router",
      "CSS / Tailwind CSS"
    ]
  },

  uiHighlights: [
    "Responsive appointment booking interface",
    "Modern card-based doctor listing",
    "Clean and user-friendly booking form",
    "Interactive schedule & slot selector UI",
    "Mobile first design"
  ],

  futureEnhancements: [
    "Backend integration for doctor data",
    "Calendar component for bookings",
    "Authentication for patients",
    "Notifications & SMS reminders",
    "Dark / Light theme toggle"
  ],

  image: doctor,

  liveDemo: "https://sk-medic.vercel.app",
  github: "https://github.com/SENTHILKUMAR-M25/SK-Medic"
},
{
  id: "sk-store-ui",

  title: "SK-Store — E-commerce UI",

  shortDesc:
    "Modern responsive e-commerce frontend built with React, Redux, and Vite.",

  detailedDesc:
    "SK-Store is a frontend e-commerce application built using React, Vite, and Redux for state management. The UI includes dynamic product listing, cart interactions, wishlist, and simulated checkout flows. It demonstrates component reuse, global state handling, responsive design, and modern UI patterns for shopping platforms. All backend functionality is mocked to focus on frontend engineering excellence.",

  category: "Frontend E-commerce Application",

  modules: {
    productListing: {
      title: "Product Catalog UI",
      features: [
        "Responsive product listing grid",
        "Filter UI (category, price, search)",
        "Product card components",
        "Hover animations & quick actions",
        "Dynamic render from mock data"
      ]
    },

    cartSystem: {
      title: "Cart Interface & State Management",
      features: [
        "Add / remove cart items",
        "Update quantities",
        "Persistent cart state (Redux)",
        "Cart total & price calculation UI",
        "Remove item animation"
      ]
    },

    wishlistUI: {
      title: "Wishlist Experience",
      features: [
        "Add/remove wishlist items",
        "Wishlist state using Redux",
        "Product card wishlist button",
        "Responsive wishlist layout"
      ]
    },

    checkoutFlow: {
      title: "Checkout & Simulated Payment UI",
      features: [
        "Checkout form interface",
        "Order summary UI",
        "Input validation visuals",
        "Confirmation screen mockup",
        "Smooth transitions"
      ]
    }
  },

  techStack: {
    frontend: [
      "React",
      "Redux Toolkit",
      "Vite",
      "React Router",
      "CSS / Tailwind CSS"
    ]
  },

  uiHighlights: [
    "Mobile-first responsive design",
    "Global state with Redux",
    "Reusable UI components",
    "Clean shopping UI",
    "Smooth UI feedback & interactions"
  ],

  futureEnhancements: [
    "Backend data integration",
    "Stripe payment UI integration",
    "User authentication UI",
    "Product detail pages with routing",
    "Dark / Light theme toggle"
  ],

  image: skStore,

  liveDemo: "https://sk-store.vercel.app",
  github: "https://github.com/SENTHILKUMAR-M25/SK-Store"
}
];

export default projects;

