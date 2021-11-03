import toast from 'react-hot-toast';

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const Host = window.location.host === "localhost:3000" ? "http://localhost:6363/" : "https://store-ecommerce-backend.herokuapp.com/"

export const Endpoints = {
    product: "api/products",
    signIn: "api/auth/login",
    signUp:"api/auth/register"
}
export const shippingValues = {
    shipping:60,
    taxPercentage:"18",
    discountPercentage:"5"
}
export const convertToSlug = (title) => {
    return title?.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};
export const notify = (message, type) => {
    type === 'error' ? toast.error(message) : toast.success(message);
}
export const errors = {
    noProducts:"There are no products in your cart!",
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
    setTimeout(function () {
        window.location.href = '/admin/login';
    }, 2000)
}
export const uppercaseFirstLetter = (string) => {
    return string && string[0].toUpperCase() + string.slice(1);
}
export const lowercaseFirstLetter = (string) => {
    return string && string[0].toLowerCase() + string.slice(1);
}
export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
export const convertToINR = (number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
}