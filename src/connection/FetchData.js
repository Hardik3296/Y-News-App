export const fetchData = async (page) => {
   let response = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page&&page=" + page)
   response = await response.json()
   console.log("response in fetchData")
   return response
}