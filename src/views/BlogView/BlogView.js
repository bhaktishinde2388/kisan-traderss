import { useParams } from "react-router-dom"
import "./BlogView.css"
import {blog} from "../../data";
function BlogView ()
    {
        const {id} = useParams()

        const select = blog.find((blogObject) =>{
            if (blogObject.id == id)
                {
                    return true
                }

                else{
                   return false
                }
            })

            console.log(select)

        return(
            <div className="blogs-container">
            <h1>{select.title} </h1>
            <p className="blog-date-author">
                {select.author.name} | {select.date}
            </p>
            <p >
                {select.content}
            </p>
            </div>
        )
    }

    export default BlogView