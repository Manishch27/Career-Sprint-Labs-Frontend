/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["i.ibb.co","www.odljain.com", "happenings.lpu.in", "amity.edu", "encrypted-tbn0.gstatic.com", "distanceeducationschool.com", "upload.wikimedia.org",  "seeklogo.com", "collegesgyan.com", "media.sharda.ac.in", "www.apieindia.org", "www.uudoon.in", "mycareersview.com", "shooliniuniversity.com", "www.vidyalive.com", "content.jdmagicbox.com", "vignan.ac.in", "www.dypiu.ac.in", "i.pinimg.com", "www.andhrauniversity.edu.in", "d1aeya7jd2fyco.cloudfront.net", "" ],
    },

    typescript: {
        ignoreBuildErrors: true,
      },

      eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;