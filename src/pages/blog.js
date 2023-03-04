import { Link } from "react-router-dom";

const BlogPage = () => {
    return (
        <div>
            <h1>Blog Page</h1>

            <div>
                <Link to='/about-me'>Read more about me</Link>
            </div>
        </div>
    );
};


export default BlogPage;