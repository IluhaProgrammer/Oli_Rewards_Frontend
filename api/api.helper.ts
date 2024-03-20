export const getContenttype = () => ({
    'Content-type': 'application/json',
})

export const errorCatch = (error : any) => {
    const message = error?.response?.data?.message

    return message 
        ? typeof error.response.data.message === 'object'
            ? message[0]
            : message
        : error.message
        
}
    