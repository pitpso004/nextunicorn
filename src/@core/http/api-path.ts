export const ApiPath = {
    auth: {
        login: '/auth/login',
        logout: '/auth/logout',
        refreshToken: '/auth/refreshtoken',
        permissions: '/auth/permissions'
    },
    account: {
        profile: '/master/user-profile',
    },
    uploads: {
        uploadFile: '/files/upload',
        getFile: '/files/by-id',
    },
} 