import glass from "../assets/images/glass1.png";
import glass2 from "../assets/images/glass2.png";


function BannerFour(){
    return(
       <>
            <div className="container-fluid black pt-5 ">
                <div className="container  pb-5 pt-5">
                   <div className="row  d-none">
                    <div className="col-lg-6">
                        <div className="g-1">
                         <img src={glass}></img>

                        </div>
                    </div>
                       <div className="col-lg-6">
                        <div className="g-2">
                         <img src={glass2}></img>

                        </div>
                    </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="c-4">
                                <p>01</p>
                                <h5>Tell Us About Your <br />
                                    Business Idea.</h5>


                            </div>
                        </div>
                                 <div className="col-lg-4">
                            <div className="c-4">
                                <p>01</p>
                                <h5>Tell Us About Your <br />
                                    Business Idea.</h5>


                            </div>
                        </div>
                                 <div className="col-lg-4">
                            <div className="c-4">
                                <p>01</p>
                                <h5>Tell Us About Your <br />
                                    Business Idea.</h5>


                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>

        </>
    )
}
export default BannerFour;