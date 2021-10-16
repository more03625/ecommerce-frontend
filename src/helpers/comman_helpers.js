import toast from 'react-hot-toast';

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const Host = "http://localhost:6363/";

export const Endpoints = {
    product:"api/products",
}
export const convertToSlug = (blogTitle) => {
    return blogTitle
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
};
export const notify = (message, type) => {
    type === 'error' ? toast.error(message) : toast.success(message);
} 
export const catchError = "Something went wrong, Please try again!";
export const rowLimit = 20;
export const userTokenName = 'react-ecommerce-token';

export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(userTokenName));
}
export const cleanObject = (obj) => {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
            delete obj[propName];
        }
    }
    return obj
}
export const logout = () => {
    notify("Logged out successfully!", 'success');
    localStorage.removeItem(userTokenName);
    setTimeout(function(){
        window.location.href = '/admin/login';
    }, 2000)
}