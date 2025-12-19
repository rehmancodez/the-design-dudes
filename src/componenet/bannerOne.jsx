import call from "../assets/images/Group.png"

function BannerOne() {
    return (
        <>
            <div className="container-fluid banner-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">


                        <div className="c-0">                     
                               <div className="c-1">


                                <p>The Design Dudes</p>
                                <div>

                                <h1>Making Your</h1>
                                <h1>Brand Shine in the</h1>
                                <h1><span>Digital Universe</span></h1>
                                </div>
                                <button type="button" class="btn btn-light">Light</button>
                            </div>
                            <div className="call">
                                <div className="phone">
                                    <img src={call} alt="phones"></img>
                                    <div>
                                        <p>Call Now</p>
                                        <h5>+96 285 8564 222</h5>
                                    </div>


                                </div>
                                <div className="msg">
                                    <img src={call} alt="phones"></img>
                                    <div>
                                        <p>Call Now</p>
                                        <h5>+96 285 8564 222</h5>
                                    </div>

                                </div>

                            </div>

                        </div>
                        </div>



                    </div>

                </div>

            </div>



        </>
    )
}
export default BannerOne;