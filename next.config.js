/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['yandex.ru', 'olymp-ekt.ru', 
        'web.whatsapp.com', 'vk.com', 'sun9-33.userapi.com',
         'sun9-46.userapi.com', 'sun9-3.userapi.com',
          'sun9-31.userapi.com', 'sun9-63.userapi.com',
           'sun9-43.userapi.com', 'sun9-78.userapi.com',
        'sun9-72.userapi.com', 'sun9-23.userapi.com', 'sun1-23.userapi.com', 'sun9-67.userapi.com', 'sun9-45.userapi.com', 'sun9-54.userapi.com']
    },
    "output": "export",
    "images": {
        unoptimized: true
    }
}
    
module.exports = nextConfig
