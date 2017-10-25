export default ({onSubmit}) =>
    <form method="post" action="/" className='white row'>
        <div className='col-6'>
            <label>Nombre de Usuario</label>
            <input type="text" name="name" className="form-control"/>
            <label>Clave</label>
            <input type="password" name='password' className="form-control"/>
            <label>Nivel Educación</label>
            <select className="form-control" name='education' >
                <option/>
                <option> Higher education</option>
                <option>Secondary technical</option>
                <option>Average</option>
            </select>
            <label>Región</label>
            <select className="form-control" name='region' >
                <option/>
                <option>I Region</option>
                <option>II Region</option>
                <option>III Region</option>
                <option>IV Region</option>
                <option>V Region</option>
            </select>

            <div className="form-check">
                <label className="form-check-label">
                    <input className="form-check-input" name='terms' type="checkbox"/>
                    Acepto <a href='#'>Condiciones de uso</a>
                </label>
            </div>
        </div>
        <div className="col-6">
            <label>Email</label>
            <input type="text" name='email' className="form-control"/>


            <label>Nacimiento</label>

            <div className='row'>
                <div className='col'>
                    <select name='day' className="form-control">
                        <option/>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                </div>
                <div className='col'>
                    <select name='month' className="form-control">
                        <option/>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className='col'>
                    <select name='year' className="form-control">
                        <option/>
                        <option value={1980}>1980</option>
                        <option value={1981}>1981</option>
                        <option value={1982}>1982</option>
                        <option value={1983}>1983</option>
                        <option value={1984}>1984</option>
                        <option value={1985}>1985</option>
                        <option value={1986}>1986</option>
                        <option value={1987}>1987</option>
                        <option value={1988}>1988</option>
                        <option value={1989}>1989</option>
                        <option value={1990}>1990</option>
                        <option value={1991}>1991</option>
                        <option value={1992}>1992</option>
                        <option value={1993}>1993</option>
                        <option value={1994}>1994</option>
                        <option value={1995}>1995</option>
                        <option value={1996}>1996</option>
                        <option value={1997}>1997</option>
                        <option value={1998}>1998</option>
                        <option value={1999}>1999</option>
                        <option value={2000}>2000</option>
                        <option value={2001}>2001</option>
                        <option value={2002}>2002</option>
                        <option value={2003}>2003</option>
                        <option value={2004}>2004</option>
                        <option value={2005}>2005</option>
                    </select>
                </div>
            </div>


            <label>Hijos</label>
            <select className="form-control" name='children'>
                <option/>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label>Comuna</label>
            <select className=" form-control" name='place'>
                <option/>
                <option>North</option>
                <option>Center</option>
                <option>South</option>
            </select>
            <button className="btn btn-primary btn-block mt-3" onClick={onSubmit}>Finalizar</button>
        </div>


    </form>