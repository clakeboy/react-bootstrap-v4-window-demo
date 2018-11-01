import React from 'react';
import PropTypes from 'prop-types';
import {GetComponent} from "../common/Funcs";
import ReactBootstrap4,{
    Container,
    Input,
    Button,
    Checkbox,
    Table,
    Pagination,
    Dropdown,
    Select,
    Calendar,
    TextArea,
    Switch,
    Label,
    TabsContent,
    Tabs,
    Icon,
    Card,
    LoaderComponent,
    Menu
} from '@clake/react-bootstrap4';
import {
    Window,
    WindowGroup,
    TopMenu
} from '@clake/react-bootstrap4-window';
import windowList from './window/windows';
import Storage from "../common/Storage";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testChecked: false,
            pageData:{},
            chose_date:'2018-8-3',
        };

        this.dataList = [
            {text:'Dropdown Item 1',value:'1'},
            {text:'Dropdown Item 2',value:'2'},
            {text:'Dropdown Item 3',value:'3'}
        ];

        this.dataArrList = [
            'Dropdown Text1',
            'Dropdown Text2',
            'Dropdown Text3',
        ];

        this.dataTable = [];
        for (let i=0;i<10;i++) {
            this.dataTable.push({
                'name':'name-'+(i+1),
                'age':'age-'+(i+1),
                'birthday':'birthday-'+(i+1),
                'address':'address-'+(i+1),
                'both':'both-'+(i+1),
                'is_paid':1,
                'test':'test-'+(i+1),
            })
        }

        this.comboData = [{
            "id"             : 3,
            "task_name"      : "测试通知",
            "time_rule"      : "0 * * * * *",
            "once"           : true,
            "is_execute"     : true,
            "disable"        : false,
            "notify_url"     : "http://localhost:9803/notify",
            "notify_method"  : "GET",
            "notify_data"    : "",
            "notify_number"  : 6,
            "notified_number": 6,
            "source"         : "System",
            "created_date"   : 1530864160
        }, {
            "id"             : 2,
            "task_name"      : "测试一次通知",
            "time_rule"      : "* */1 * * * *",
            "once"           : true,
            "is_execute"     : true,
            "disable"        : false,
            "notify_url"     : "http://localhost:9803/serv/server/status",
            "notify_method"  : "GET",
            "notify_data"    : "",
            "notify_number"  : 3,
            "notified_number": 7,
            "source"         : "System",
            "created_date"   : 1530783655
        }, {
            "id"             : 1,
            "task_name"      : "测试任务",
            "time_rule"      : "0 * * * * *",
            "once"           : true,
            "is_execute"     : true,
            "disable"        : false,
            "notify_url"     : "http://localhost:9803",
            "notify_method"  : "GET",
            "notify_data"    : "asdfasdf",
            "notify_number"  : 7,
            "notified_number": 12,
            "source"         : "",
            "created_date"   : 1530767866
        }];
    }

    componentDidMount() {

    }

    changeHandler(name){
        return (val)=>{
            let data = this.state.pageData;
            data[name] = val;
            this.setState({
                pageData:data
            })
        };
    }

    loginOut() {
        Storage.remove('login_user');
        this.props.setLogin(null,false);
    }

    render() {
        return (
            <Container className='mt-5'>
                <TopMenu top>
                    <div className='ck-top-menu-item'><Icon icon='copyright'/></div>
                    <TopMenu.Item text='System'>
                        <Menu onClick={(key)=>{
                            if (key === 'loginout') this.loginOut();
                            if (key === 'test') this.manage.open('test',{id:'test data'});
                        }}>
                            <Menu.Item field={'test'}>Test Window</Menu.Item>
                            <Menu.Item step/>
                            <Menu.Item field={'loginout'}>login out</Menu.Item>
                        </Menu>
                    </TopMenu.Item>
                    <TopMenu.Item text='ABI'>
                        <Menu onClick={(key)=>{
                            this.manage.open(key,{id:123123});
                        }}>
                            {windowList.map((item)=>{
                                return <Menu.Item field={item.name}>{item.title}</Menu.Item>
                            })}
                        </Menu>
                    </TopMenu.Item>
                </TopMenu>
                <h1 className='fixed-bottom'>React Bootstrap v4 Window Demo</h1>
                <WindowGroup ref={c=>this.manage=c}>
                    <Window name='test' marginTop={25} title='Test CTable' width='700px' height='500px' backColor={'#f3f3f4'}>
                        <LoaderComponent loadPath='/test/CTableTest' parent={this} import={GetComponent}/>
                    </Window>
                    {windowList.map((item)=>{
                        return (<Window name={item.name} marginTop={25} title={item.title} width={item.width} height={item.height} backColor={'#f3f3f4'}>
                            <LoaderComponent loadPath={`/window/${item.uname}.jsx`} import={GetComponent}/>
                        </Window>)
                    })}
                </WindowGroup>
            </Container>
        );
    }
}

Main.contextTypes = {
    router: PropTypes.object
};

export default Main;