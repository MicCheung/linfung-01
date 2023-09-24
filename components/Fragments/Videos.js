

export const Video01 = ({section}) => {

    return (

        <iframe
            src={section.src}
            width={section.width}
            height={section.height} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen="allowfullscreen"
            className="pr-6">
        </iframe>
       
    );
}
