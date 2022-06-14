

const GalleryItems = (props) =>{

    return(
        <div className = "galleryitem">
    
            <div className = "gallerydate">
             <h3> {props.name} </h3>
             <p> {props.description} </p>
             <h6> Date: {props.date}</h6>
            </div>
          
            <img src = {props.img}/>
           
        
        </div>
    )
}
export default GalleryItems