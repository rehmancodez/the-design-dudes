
import laptop from '../assets/images/bannerfivepic.png';

function BannerFive() {
    return (
        <>
            <div className="container-fluid black pt-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className='c-5'>
                        <img src={laptop} alt='laptop'></img>
                            </div>


                            </div>
                            <div className='col-lg-6 c-5-top'>
                            <div className='c-5-t'>
                           <span> our approach</span>
                            <h1>Why Choose Us</h1>
                            <p>We don’t just work with concrete and steel. We've collected <br/> the of creative websites, web design concepts and ideas <br/> work and steel We are Approachable,.</p>
                            <div className='content'><h5>15</h5>  <h5>Years Of Experience</h5>  </div>
                              <div className='content'><h5>15</h5>  <h5>Years Of Experience</h5>  </div>
                                <div className='content'><h5>15</h5>  <h5>Years Of Experience</h5>  </div>
                                <button type="button" class="btn btn-outline-light">read More</button>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            

        </>
    )
}
export default BannerFive;
