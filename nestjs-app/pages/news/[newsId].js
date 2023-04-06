import { useRouter } from "next/router"
// our.domain.com/news(filename)/fileName


function DetailsPage(){
    const router = useRouter();
    // console.log(router);

     console.log(router.query.newsId);

    return <h1>Something Important in DetailsPage</h1>
}
export default DetailsPage;