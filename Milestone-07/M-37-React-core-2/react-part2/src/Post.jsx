export default function Post({post}) {
    const {title}=post
    return (
        <div className="cardStyle font-bold ">

            <h2>Post- {title}</h2>
        </div>
    )
}