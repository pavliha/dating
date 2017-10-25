export default ({user,onLogout}) => <div className='pt-4'>
    <span className='white'>{user.name}</span> &nbsp;
    <button className='btn btn-login' onClick={onLogout}>Log out</button>
</div>