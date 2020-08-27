import axios from 'axios'
const api_key = "AIzaSyBdQ2k5IHUCXnnYl6R1BDVYmEyR3LmLYGE"
  // AIzaSyCEEcCDOjEcMLrIcOmcdoG3yuKahWQcDFQ
  // AIzaSyA1wuhfxQ_sYhrxJoCILvnk9GDqfhT0EeY


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : 'AIzaSyD4KDJl2nnSHv4I1wNQy1j0SpD4pWAnSqg'

    }
  });