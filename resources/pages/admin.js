import React, {Component} from 'react'
import Head from 'next/head'
import AuthStage2Form from "../components/AuthStage2Form";
import Form from 'form-to-json'
import axios from 'axios'
// const validate = require('express-validation')
// const userValidation = require('../app/Validation/User')

export default class Admin extends Component {
    state = {
        user: null,
        users: null,
        id: null,
        edit: null,
        color: null
    }

    render() {

        const {user, users, id} = this.state

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
                <link href='../static/css/admin.css' rel='stylesheet'/>
            </Head>

            <main style={{background: this.state.color}}>

                <div className="adminHeader d-flex justify-content-end">
                    <button className="btn btn-login mr-5">+ Create</button>
                    <div className="white mr-4">{this.state.user ? this.state.user.name :
                        <div>Not found user</div>}</div>
                </div>
                {!this.state.edit ?

                    users ? <table className="table table-bordered ml-2 AdminTable">
                        <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">User role</th>
                            <th scope="col">Save changes</th>
                            <th scope="col">Delete user</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => {
                            return <tr key={index}>
                                <th scope="row"><h5><a href="#"
                                                       onClick={this.handleEditor.bind(this, user)}>{user.name}</a>
                                </h5></th>
                                <td><select className="form-control" name="list">
                                    <option value="User">User</option>
                                    <option value="Moderator">Moderator</option>
                                    <option value="Admin">Admin</option>
                                </select></td>
                                <td><a href="#"><h5>Save changes</h5></a></td>
                                <td><a href="#" onClick={this.handleDeleteUser.bind(this, user)}><h5>Delete
                                    user</h5>
                                </a>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table> : <div className="text-center m-5"><h1>Not found</h1></div>

                    :


                    <div className="mx-auto stage-2-form">
                        <div className='d-flex flex-column justify-content-around py-5'>
                            <AuthStage2Form style={{background: 'silver'}} values={this.state.edit}
                                            onSubmit={this.handleSaveUser.bind(this, this.state.edit)}/>


                        </div>
                    </div>
                }
            </main>
        </div>
    }

    componentDidMount() {
        const user = localStorage.getItem('user')

        if (user) {
            this.setState({user: JSON.parse(user)})
            // console.log(user)
        }

        this.getUsers(this)


    }

    getUsers(self) {
        axios.get('/users').then((response) => {
            const users = response.data
            self.setState({users})
        })
    }

    async handleDeleteUser(user) {
        await axios.delete('/user/' + user._id)

        this.getUsers(this)


    }

    handleEditor(user) {
        this.setState({
            edit: user,
            color: 'silver'
        })
    }

    async handleSaveUser(user) {
        this.setState({
            edit: false,
            color: null
        })
        // console.log(user)

        await axios.put('/user/' + user._id)
        this.getUsers(this)
    }
}