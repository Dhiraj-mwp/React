// our.domain.com/news(filename)

import { Fragment } from "react";


function NewsPage(){
    return <Fragment>
        <h1>News Details page</h1>
        <ul>
            <li> <a href="/news/link1">News link1</a></li>
            <li> <a href="/news/link2">News link1</a></li>
        </ul>
    </Fragment>

}

export default NewsPage;