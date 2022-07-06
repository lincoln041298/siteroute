import { navbars } from '../../../data/navbar'

export default function handler(req, res) {
    res.status(200).json(navbars)
    console.log(navbars)
}
  