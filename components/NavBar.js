export default () =>
        <nav className="container">
            <div className="row justify-content-between">
                <div className="col-4">
                    <div className="col-md-3">
                        <img src="/static/images/landingC/logo.png" height={60} width={230}/>
                        <div className="headerFind">Find Your Ideal</div>
                    </div>
                </div>
                <div className="col-4">
                    <div id="header-txt"/>
                    <div className=" form-inline row align-items-end">
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Usuario"/>
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Clave"/>
                        </div>
                        <div className="col-4">
                            <div className="knopka">deposit</div>
                        </div>
                    </div>
                    <div id="header-remember">
                        <input id="remember" type="checkbox"/>
                        <span><label htmlFor="remember">remember data</label></span>
                        <span className="forgotPassword ml-3"> Did you forget your password? </span>
                    </div>
                </div>
            </div>
        </nav>
