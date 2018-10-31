/**
 * Created by clakeboy on 2018/6/29.
 */
import React from 'react';

import '../css/Login.less';

import {
    Icon,
    Input,
    Button,
    Checkbox,
    Modal,
    Load
} from '@clake/react-bootstrap4';
import Fetch from "../common/Fetch";
import Storage from "../common/Storage";

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page_data:{
                user_name:'',
                password:'',
                remember:false
            },
            init:false
        };

        let login_name = Storage.get('login_name');
        if (login_name) {
            this.state.page_data.user_name = login_name;
            this.state.page_data.remember = true;
        }
    }

    componentWillMount() {
        this.checkLogin()
    }

    componentDidMount() {

    }

    checkLogin() {
        // Fetch('/serv/login/auth',{},(res)=>{
        //     if (res.status) {
        //         this.setLogin(res.data)
        //     } else {
        //         this.setState({
        //             init:true
        //         })
        //     }
        // },(e)=>{
        //
        // })

        //以下只是为方便测试的本地代码,正式上线请用上面的远程验证
        let login_user = Storage.get('login_user');
        if (login_user) {
            let user = JSON.parse(login_user);
            this.setLogin(user);
        } else {
            this.setState({init:true})
        }
    }

    setLogin(user) {
        this.props.setLogin(user,true);
    }

    changeHandler(name){
        return (val)=>{
            let data = this.state.page_data;
            data[name] = val;
            this.setState({
                page_data:data
            })
        };
    }

    login = () => {
        if (this.state.page_data.remember) {
            Storage.set('login_name',this.state.page_data.user_name);
        } else {
            Storage.remove('login_name');
        }
        this.modal.loading('Signing...');
        // Fetch('/serv/login/sign',{
        //     account:this.state.page_data.user_name,
        //     password:this.state.page_data.password
        // },(res)=>{
        //     if (res.status) {
        //         this.modal.close();
        //         this.setLogin(res.data)
        //     } else {
        //         this.modal.alert(res.msg);
        //     }
        // },(e)=>{
        //     this.modal.alert('远程调用错误! '+e);
        // })


        //以下代码只是测试,正式上线请用上面的代码进行远程验证
        let user = {
            account:this.state.page_data.user_name,
            password:this.state.page_data.password
        };
        if (user.account === 'admin' &&
            user.password === '123123') {
            this.modal.close();
            Storage.set('login_user',JSON.stringify(user));
            this.setLogin(user);
        } else {
            this.modal.alert('username or password error!');
        }
    };

    render() {
        if (!this.state.init) {
            return this.renderLoad()
        }
        return this.renderLogin()
    }

    renderLoad() {
        return (
            <div className='text-center text-danger mt-5 mb-5'>
                <Load>loading</Load>
            </div>
        )
    }

    renderLogin() {
        return (
            <div className='ck-login'>
                <div className="card ck-login-window">
                    <div className="card-header text-info text-center">
                        <Icon icon='envelope-open'/> ABI Query System
                    </div>
                    <div className="card-body">
                        <Input className='mb-4' placeholder='Username' data={this.state.page_data.user_name} onChange={this.changeHandler('user_name')}/>
                        <Input className='mb-4' placeholder='Password' type='password'
                               data={this.state.page_data.password}
                               onEnter={this.login}
                               onChange={this.changeHandler('password')}/>
                        <Checkbox label='Save Username' onChange={e=>{
                            let data = this.state.page_data;
                            data['remember'] = e.target.checked;
                            this.setState({
                                page_data:data
                            })
                        }} checked={this.state.page_data.remember}/>
                        <Button size='lg' block onClick={this.login}>Sign in</Button>
                    </div>
                </div>
                <Modal ref={c=>this.modal=c}/>
            </div>
        );
    }
}

Login.propTypes = {

};

Login.defaultProps = {

};

export default Login;