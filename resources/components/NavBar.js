export default ({children}) =>
    <nav className="container">
        <div className="row justify-content-between">
            <div className="col-4">
                <div className='pt-3'>
                    <img src="/static/images/landingC/logo.png" height={60} width={230}/>
                    <div><span className="white">Find Your Ideal</span></div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <div className='pt-2'>

                    {children}

                </div>
            </div>
        </div>
    </nav>
