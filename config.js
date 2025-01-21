
const PAGE_LIMIT = 10;
const baseUrl = "http://localhost:1337/api/";
const contactUrl = "https://teachpro.somee.com/";
const APP_SETTINGS = {
    API_PATH: {
        AUTH: {
            login: baseUrl + "auth/Login",
        },
        CATEGORIES: {
            getAll: baseUrl + 'categories',
            add: baseUrl + 'categories',
            update: baseUrl + 'categories',
            delete: baseUrl + 'categories'
        },
        REVIEWS: {
            getAll: baseUrl + 'student-reviews?populate=*',
            add: baseUrl + 'reviews',
            update: baseUrl + 'reviews',
            delete: baseUrl + 'reviews'
        },
        NATIONALCOURSES: {
            getAll: baseUrl + 'courses?populate=*',
        },
        INTERNATIONALCOURSES: {
            getAll: baseUrl + 'international-courses?populate=*',
        },
        BLOGS: {
            getAll: baseUrl + 'blogs?populate=*',
        },
        SERVICES: {
            getAll: baseUrl + 'services',
            add: baseUrl + 'services',
            update: baseUrl + 'services',
            delete: baseUrl + 'services'
        },
        CSSANDPMS: {
            getAll: baseUrl + 'css-and-pms-essays?populate=*',
        },
        NEWSLETTER: {
            getAll: baseUrl + 'popups',
            update: baseUrl + 'popups',
        },
        LOOKUPS: {
            getAll: baseUrl + 'lookups',
            update: baseUrl + 'lookups'
        },
    }
};
const CONTACTUS = {
    CONTACT_PATH: {
        CONTACT: {
            send: contactUrl + 'contactus',
        }

    },
}
const ROLE = [

    {
        id: 'admin',
        value: "Admin"
    },
    {
        id: 'customer',
        value: "Customer"
    }
]
const USER_ROLE_LIST = {
    ADMIN: 'admin',
    SUPERADMIN: 'superAdmin',
    CUSTOMER: 'customer'
}
const ORDERSTATUS = [
    {
        title: 'Pending',
        id: 'pending'
    },
    {
        title: 'In-Progress',
        id: 'inProgress'
    },
    {
        title: 'Completed',
        id: 'completed'
    },
    {
        title: 'Delivered',
        id: 'delivered'
    }
]
export { USER_ROLE_LIST, ORDERSTATUS, ROLE, APP_SETTINGS, PAGE_LIMIT, CONTACTUS }