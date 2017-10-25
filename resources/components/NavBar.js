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
                    <small className='white'>If you already have a profile</small>
                    {children}
                    <div>
                        <input id="remember" type="checkbox"/>
                        <small className='white'><label htmlFor="remember">&nbsp;remember data</label></small>
                        <small className="forgotPassword ml-3 white">
                            <a href='#' className='white'>Did you forget your password?</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </nav>
