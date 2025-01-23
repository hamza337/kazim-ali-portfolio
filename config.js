
const PAGE_LIMIT = 10;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const contactUrl = "https://teachpro.somee.com/";
const APP_SETTINGS = {
    API_PATH: {
        AUTH: {
            login: baseUrl + "/api/auth/Login",
        },
        CATEGORIES: {
            getAll: baseUrl + '/api/categories',
            add: baseUrl + '/api/categories',
            update: baseUrl + '/api/categories',
            delete: baseUrl + '/api/categories'
        },
        REVIEWS: {
            getAll: baseUrl + '/api/student-reviews?populate=*',
        },
        NATIONALCOURSES: {
            getAll: baseUrl + '/api/courses?populate=*',
        },
        INTERNATIONALCOURSES: {
            getAll: baseUrl + '/api/international-courses?populate=*',
        },
        BLOGS: {
            getAll: baseUrl + '/api/blogs?populate=*',
        },
        SERVICES: {
            getAll: baseUrl + '/api/services',
            add: baseUrl + '/api/services',
            update: baseUrl + '/api/services',
            delete: baseUrl + '/api/services'
        },
        CSSANDPMS: {
            getAll: baseUrl + '/api/css-and-pms-essays?populate=*',
        },
        NEWSLETTER: {
            getAll: baseUrl + '/api/popups',
            update: baseUrl + '/api/popups',
        },
        LOOKUPS: {
            getAll: baseUrl + '/api/lookups',
            update: baseUrl + '/api/lookups'
        },
    }
};
const CONTACTUS = {
    CONTACT_PATH: {
        CONTACT: {
            send: contactUrl + '/api/contactus',
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