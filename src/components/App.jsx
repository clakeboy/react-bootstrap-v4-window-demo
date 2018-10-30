/**
 * Created by clakeboy on 2017/12/3.
 */
import React from 'react';
import {GetComponent,GetQuery} from "../common/Funcs";
import Login from "./Login";
import {
    LoaderComponent
} from '@clake/react-bootstrap4';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login:false,
            title:'ABI Query',
        };
    }

    componentDidMount() {

    }

    setLogin = (user,is_login) => {
        this.user = user;
        this.setState({
            login:is_login
        });
    };

    setTitle = (title)=>{
        this.setState({
            title:title
        });
        document.title = title;
    };

    ucFirst(str) {
        let first = str[0].toUpperCase();
        return first+str.substr(1);
    }

    under2hump(str) {
        let arr = str.split('_');
        let hump = arr.map((item)=>{
            return this.ucFirst(item);
        });
        return hump.join('');
    }

    explainUrl(path) {
        let arr = path.split('/');
        arr.shift();
        let module = arr.pop();
        if (module === "") {
            module = 'Main';
        } else {
            module = this.under2hump(module)
        }
        let ext_path = arr.length > 0 ? '/' : '';
        return ext_path + arr.join('/') + "/" + module;
    }

    render() {
        if (!this.state.login) {
            return <Login setLogin={this.setLogin}/>
        }
        let path = this.explainUrl(this.props.location.pathname);
        return <LoaderComponent loadPath={path} query={GetQuery(this.props.location.search)} import={GetComponent} setLogin={this.setLogin} setTitle={this.setTitle} user={this.user} {...this.props}/>
    }
}