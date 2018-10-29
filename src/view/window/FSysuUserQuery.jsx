import React from 'react';
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
    Box
} from '@clake/react-bootstrap4';
import {
    CTable
} from '@clake/react-bootstrap4-window';
class FSysuUserQuery extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_sysu_user_query';
		this.title = 'Query User';
        if (!this.props.width) {
            this.props.width = '520px';
        }
        if (!this.props.height) {
            this.props.height = '512px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <CTable absolute x={'20px'} y={'88px'} width={'480px'} height={'404px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'Seq No.'} field={'group_branch_user_id'} width={'64px'}/>
                    <Table.Header text={'Group'} field={'group_code'} width={'92px'}/>
                    <Table.Header text={'Branch'} field={'branch_code'} width={'76px'}/>
                    <Table.Header text={'User'} field={'logon_name'} width={'112px'}/>
                </CTable>
                <Input field={'branch_code'} size={'xs'} absolute={true} x={'248px'} y={'48px'} width={'48px'}/>
                <Label sm={true} text={'Branch'} absolute={true} x={'184px'} y={'48px'} width={'56px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'group_code'} size={'xs'} absolute={true} x={'80px'} y={'48px'} width={'76px'}/>
                <Label sm={true} text={'Group'} absolute={true} x={'20px'} y={'48px'} width={'52px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Button size={'xs'} absolute={true} x={'20px'} y={'8px'} width={'52px'} height={'24px'}>Query</Button>
                <Button size={'xs'} absolute={true} x={'76px'} y={'8px'} width={'52px'} height={'24px'}>Clear</Button>
                <Input field={'branch_code'} size={'xs'} absolute={true} x={'404px'} y={'48px'} width={'76px'}/>
                <Label sm={true} text={'User Name'} absolute={true} x={'324px'} y={'48px'} width={'72px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FSysuUserQuery;
