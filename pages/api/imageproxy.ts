import { NextApiRequest, NextApiResponse } from 'next'

// /api/imageproxy?url=IMAGE_URL
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.query.url) { // Invalid request
        res.status(401).send("Invalid request")
        return
    }
    const image_url: string = decodeURIComponent(req.query.url as string)
    // Fetch image, pass to Res
    const image_res = await fetch(image_url, {credentials: 'include', mode: 'cors'})
    res.status(image_res.status)
    image_res.headers.forEach((val, key) => { res.setHeader(key, val) })
    res.send(image_res.body)
}

export default handler