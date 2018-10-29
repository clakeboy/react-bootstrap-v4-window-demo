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
class FSysgGroupQuery extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_sysg_group_query';
		this.title = 'Query Group';
        if (!this.props.width) {
            this.props.width = '448px';
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
                <CTable absolute x={'20px'} y={'88px'} width={'408px'} height={'400px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'Group'} field={'group_code'} width={'80px'}/>
                    <Table.Header text={'Group Name'} field={'group_name'} width={'148px'}/>
                    <Table.Header text={'No Billing'} field={'no_billing_sw'} width={'48px'}/>
                </CTable>
                <Input field={'group_code'} size={'xs'} absolute={true} x={'80px'} y={'48px'} width={'76px'}/>
                <Label sm={true} text={'Group'} absolute={true} x={'20px'} y={'48px'} width={'52px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Button size={'xs'} absolute={true} x={'20px'} y={'8px'} width={'52px'} height={'24px'}>Query</Button>
                <Button size={'xs'} absolute={true} x={'76px'} y={'8px'} width={'52px'} height={'24px'}>Clear</Button>
                <Input field={'group_code'} size={'xs'} absolute={true} x={'268px'} y={'48px'} width={'156px'}/>
                <Label sm={true} text={'Group Name'} absolute={true} x={'180px'} y={'48px'} width={'80px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FSysgGroupQuery;
