export default function Post({title , atical}){
    return(
        <div className={"post"}>
        <div className={"post-title"}>
        <h3>{title}</h3>
        </div>
        <div className={"post-body"}>
        <p>{atical}</p>
        </div>
        </div>
    );
}