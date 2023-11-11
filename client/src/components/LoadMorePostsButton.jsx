import { Link } from "react-router-dom"

export default function LoadMorePostsButton  () {

    return (
        <div>
            <Link to={'/register'} className="btn btn-primary btn-block my-4" type="submit">
            Load More Articles
          </Link>
        </div>

    )
}