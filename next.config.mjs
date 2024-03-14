/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return[
            {
               source:"/api/:path*",
               headers:[
                { key:"Access-Control-allow-Credentials",value:"true" },
                { key:"Access-Control-allow-Origin",value:"*"},
                { key:"Access-Control-allow-Methods",value:"GET,POST,PUT,DELETE"},
               ]
            }
        ]
    },
   
    images:{
        remotePatterns:[
        {
            protocol:"https",
            hostname:'cdn.sanity.io',
            port:'',
            pathname:"/**"
        }
        ]
    }
};

export default nextConfig;
