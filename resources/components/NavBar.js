export default ({children}) =>
    <nav className="container">
        <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
                <div className='pt-3'>
                    <img src="/static/images/landingC/logo.png" height={40} width={170}/>
                    <div><span className="white">Find Your Ideal</span></div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-end">
                <div className='pt-2'>

                    {children}

                </div>
            </div>
        </div>
    </nav>
