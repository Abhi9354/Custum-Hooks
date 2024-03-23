import { useApi } from "../hooks/api-hook"

const News = () => {
    //call api-hook
   const {loading , news ,error} =useApi(import.meta.env.VITE_NEWS_URL)
  return (
    <div>
        <p>{loading && <span>Loading..</span>}</p>
        <h1>News app</h1>
        {news && <p>comes</p>}
       {error && <p>not comes</p>}
    </div>
  )
}

export default News
