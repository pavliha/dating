import React, {Component} from 'react'
import Head from 'next/head'
import axios from 'axios'

export default class Admin extends Component {
    state = {
        user: null,
        users: null
    }

    render() {
        return <div>
            <Head>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Admin</title>
                <meta charSet='utf-8'/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
                      integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
                      crossOrigin="anonymous"/>
                <link href='../static/css/style.css' rel='stylesheet'/>
            </Head>

            <main>
                <div className="adminHeader d-flex justify-content-end">
                    <button className="btn btn-login mr-5">+ Create</button>
                    <div className="white mr-4">admin</div>
                </div>

                <table className="table table-bordered ml-2 AdminTable">

                    <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">User role</th>
                        <th scope="col">Save changes</th>
                        <th scope="col">Delete user</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users ?
                            this.state.users.map(user => {
                                return <tr>
                                    <th scope="row"><h5>{user.name}</h5></th>
                                    <td><select className="form-control" name="list">
                                        <option value="User">User</option>
                                        <option value="Moderator">Moderator</option>
                                        <option value="Admin">Admin</option>
                                    </select></td>
                                    <td><a href="#"><h5>Save changes</h5></a></td>
                                    <td><a href="#"><h5>Delete user</h5></a></td>
                                </tr>
                            })
                            : <div className="text-center m-5"><h1>Not found</h1></div>
                    }

                    </tbody>
                </table>

            </main>

        </div>
    }

    componentDidMount() {
        axios.get('/admins').then((response) => {
            const users = response.data

            this.setState({users})
        })
        const user = localStorage.getItem('user')

        if (user) {
            this.setState({user: JSON.parse(user)})
            console.log(user)
        }
    }
}