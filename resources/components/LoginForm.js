export default ({onSubmit}) => <div>
    <small className='white'>If you already have a profile</small>
    <form className="d-flex">
        <input type="email" className="form-control login-control mr-1" name='email' placeholder="Usuario"/>
        <input type="password" className="form-control login-control mr-1" name='password' placeholder="Clave"/>
        <button className="btn btn-outline btn-login" onClick={onSubmit}>deposit</button>
    </form>

    <div>
        <input id="remember" type="checkbox"/>
        <small className='white'><label htmlFor="remember">&nbsp;remember data</label></small>
        <small className="forgotPassword ml-3 white">
            <a href='#' className='white'>Did you forget your password?</a>
        </small>
    </div>
</div>
