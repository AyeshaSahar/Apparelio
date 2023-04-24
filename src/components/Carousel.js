function Carousel () {
    return (
        <div className="flex items-center justify-center bg-base-200">
            <div className="carousel w-9/12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1669703777550-538a8a77fd47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
        </div>
    )
  }
  
export default Carousel


