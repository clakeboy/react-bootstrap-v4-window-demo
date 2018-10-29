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
class FSysbBarnchGroupQuery extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_sysb_barnch_group_query';
		this.title = 'Query Branch - Group';
        if (!this.props.width) {
            this.props.width = '516px';
        }
        if (!this.props.height) {
            this.props.height = '508px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <CTable absolute x={'20px'} y={'88px'} width={'476px'} height={'400px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'Seq No.'} field={'group_branch_id'} width={'64px'}/>
                    <Table.Header text={'Group'} field={'group_code'} width={'92px'}/>
                    <Table.Header text={'Branch'} field={'branch_code'} width={'76px'}/>
                </CTable>
                <Input field={'branch_code'} size={'xs'} absolute={true} x={'296px'} y={'48px'} width={'48px'}/>
                <Label sm={true} text={'Branch'} absolute={true} x={'232px'} y={'48px'} width={'56px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'group_code'} size={'xs'} absolute={true} x={'80px'} y={'48px'} width={'76px'}/>
                <Label sm={true} text={'Group'} absolute={true} x={'20px'} y={'48px'} width={'52px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Button size={'xs'} absolute={true} x={'20px'} y={'8px'} width={'52px'} height={'24px'}>Query</Button>
                <Button size={'xs'} absolute={true} x={'76px'} y={'8px'} width={'52px'} height={'24px'}>Clear</Button>
            </React.Fragment>
        );
    }
}

export default FSysbBarnchGroupQuery;
