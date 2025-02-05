
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
            getAll: baseUrl + '/api/student-reviews?populate=*&sort[0]=createdAt:asc&pagination[limit]=100',
        },
        NATIONALCOURSES: {
            getAll: baseUrl + '/api/courses?populate=*&sort[0]=createdAt:desc&pagination[limit]=100',
        },
        INTERNATIONALCOURSES: {
            getAll: baseUrl + '/api/international-courses?populate=*&sort[0]=createdAt:desc&pagination[limit]=100',
        },
        BLOGS: {
            getAll: baseUrl + '/api/blogs?populate=*&sort[0]=createdAt:asc',
        },
        SERVICES: {
            getAll: baseUrl + '/api/services',
            add: baseUrl + '/api/services',
            update: baseUrl + '/api/services',
            delete: baseUrl + '/api/services'
        },
        CSSANDPMS: {
            getAll: baseUrl + '/api/css-and-pms-essays?populate=*&sort[0]=createdAt:asc&pagination[limit]=100',
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