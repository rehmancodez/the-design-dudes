import logos from '../assets/images/logoss.png';


function BannerTwo() {

    return (
        <>
            <div className='container-fluid black-olive d-none d-sm-block'>
                <div className='container pt-3 pb-3'>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <img src={logos} alt='name'></img>

                        </div>
                        <div className='col-lg-2'>
                            <img src={logos} alt='name'></img>

                        </div>
                        <div className='col-lg-2'>
                            <img src={logos} alt='name'></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={logos} alt='name'></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={logos} alt='name'></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={logos} alt='name'></img>
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}
export default BannerTwo;