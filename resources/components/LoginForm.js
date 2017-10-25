export default ({onSubmit}) =>
    <form className="d-flex">
        <input type="text" className="form-control login-control mr-1" name='name' placeholder="Usuario"/>
        <input type="text" className="form-control login-control mr-1" name='password' placeholder="Clave"/>
        <button className="btn btn-outline btn-login" onClick={onSubmit}>deposit</button>
    </form>
