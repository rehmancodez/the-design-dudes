import pic1 from "../assets/images/picOne.png";
import pic2 from "../assets/images/picTwo.png";
import pic3 from "../assets/images/picThree.png";

function BannerEight() {
    return (
        <>
            <div className="container-fluid black ">
                <div className="container pt-5">
                    <div className="row">
                    <div className="col-lg-3">
                    <div className="c-8">
                        <span>Showcashing</span>
                        <h1>Our Portfolio</h1>
                    </div>

                    </div>
                    <div className="col-lg-9">
                    <div className="c-8-t">
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        
                    </div>


                    </div>
               
                     
                    </div>
                </div>
            </div>
             <div className="container-fluid black pt-5 pb-5">
                
                    <div className="row">
                    <div className="col-lg-3">
                        <div className="picOne-1">
                        <img src={pic1}></img>

                        </div>
                    </div>
                  
                      <div className="col-lg-6">
                         <div className="picTwo-2">
                         <img src={pic2}></img>

                         </div>
                    </div>
                        <div className="col-lg-3">
                        <div className="pic-3">
                        <img src={pic3}></img>

                        </div>
                    </div>
                    
                    
                    </div>
                
            </div>

        </>
    )
}
export default BannerEight;
