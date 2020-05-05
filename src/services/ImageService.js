import axios from 'axios';

const IMAGE_DB = 'https://eu1.prisma.sh/lukasz-b/recruitment/dev';
const callPrismaApi = async (query) => {
    return axios({
        method: 'POST',
        url: IMAGE_DB,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            query,
        }),
    }).then(response => {
        return response.data;
    })
}

const getImages = async () => {
    const {data} = await callPrismaApi(`{ imageses { id title imageUrl } }`)
    // WHAT A CRAZY NAME, BUT IT COME FROM PRISMA THIS WAY, WRONG NAMING ON MY SIDE.
    const {imageses} = data;
    return imageses;
}

const getImage = async (imageId) => {
    const {data} = await callPrismaApi(`{ imageses (where: {id:"${imageId}"}) { id title imageUrl }}`)
    return data;
}

const ImageService = {getImages, getImage};

export default ImageService;
