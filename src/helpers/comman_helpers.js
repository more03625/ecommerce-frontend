import toast from 'react-hot-toast';
export const Host = window.location.host === "localhost:3000" ? "http://localhost:6363/" : "https://store-ecommerce-backend.herokuapp.com/"
export const EMAIL_REGEX = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const Endpoints = {
    product: "api/products",
    signIn: "api/auth/login",
    signUp: "api/auth/register",
    users: "api/users"
}
export const shippingValues = {
    shipping: 60,
    taxPercentage: "18",
    discountPercentage: "5"
}
export const convertToSlug = (title) => {
    return title?.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};
export const notify = (message, type) => {
    type === 'error' ? toast.error(message) : toast.success(message);
}
export const errors = {
    noProducts: "There are no products in your cart!",
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
export const googleClientID = '796846085456-ve75qilalt19rvclcqiqp2n7ik1lil8k.apps.googleusercontent.com';

export const refreshTokenSetup = (res) => {
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes);
        // saveUserToken(newAuthRes.access_token);  <-- save new token
        localStorage.setItem('authToken', newAuthRes.id_token);

        // Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    };

    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
};

export const defaultCreds = {
    email : 'rahulmore@gmail.com',
    password : '123'
}