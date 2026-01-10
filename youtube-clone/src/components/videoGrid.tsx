import { VideoCard } from "./Videocard"

const VIDEOS=[{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
},{
    title: "how to learn coding",
      image: "photo.jpg",
      thumbnailImage: "photo.jpg",
      author: "Ayush Raj",
      views: "100k",
      timeStamp: "2days ago"
}]


export const VideoGrid=()=>{
   return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {
        VIDEOS.map(video=><div>
            <VideoCard
            title ={video.title}
            image ={video.image}
            thumbnailImage ={video.thumbnailImage}
            author ={video.author}
            views ={video.views}
            timeStamp={video.timeStamp}
             ></VideoCard>
        </div>)
    }

   </div>
}