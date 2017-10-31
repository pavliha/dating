export default ({onSubmit}) =>
    <form className="row align-items-center justify-content-center white authForm1">
        <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <span>I am</span>
            <select className="form-control" name='my_gender'>
                <option/>
                <option>Men</option>
                <option>Woman</option>
            </select>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <span>I am looking for</span>
            <select className="form-control" name='looking_for_gender'>
                <option/>
                <option>Men</option>
                <option>Woman</option>
            </select>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-2">
            <span>between</span>
            <select className="form-control" name='age'>
                <option/>
                <option>18-24</option>
                <option>25-31</option>
                <option>32-38</option>
                <option>39-45</option>
                <option>46-52</option>
                <option>53 and over</option>
            </select>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-2">
            <span>living in</span>
            <select className="form-control" name='region'>
                <option/>
                <option>I Region</option>
                <option>II Region</option>
                <option>III Region</option>
                <option>IV Region</option>
                <option>V Region</option>
            </select>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-2">
            <button className="btn btn-primary btn-sendForm mt-4" onClick={onSubmit}>Following</button>
        </div>
    </form>