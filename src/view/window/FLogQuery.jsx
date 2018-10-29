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
class FLogQuery extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_log_query';
		this.title = 'Query Request Logs';
        if (!this.props.width) {
            this.props.width = '612px';
        }
        if (!this.props.height) {
            this.props.height = '528px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <CTable absolute x={'20px'} y={'116px'} width={'572px'} height={'392px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'Seq No.'} field={'log_trail_id'} width={'52px'}/>
                    <Table.Header text={'Master B/L No.'} field={'master_bl_no'} width={'160px'}/>
                    <Table.Header text={'Request Date'} field={'request_date'} width={'112px'}/>
                    <Table.Header text={'Request by'} field={'request_by'} width={'104px'}/>
                    <Table.Header text={'Group'} field={'group_code'} width={'76px'}/>
                </CTable>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'124px'} y={'48px'} width={'192px'}/>
                <Label sm={true} text={'Master B/L No.'} absolute={true} x={'20px'} y={'48px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'group_code'} size={'xs'} absolute={true} x={'448px'} y={'48px'} width={'92px'}/>
                <Label sm={true} text={'Group Code'} absolute={true} x={'356px'} y={'48px'} width={'84px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'request_date1'} size={'xs'} absolute={true} x={'124px'} y={'76px'} width={'92px'}/>
                <Label sm={true} text={'Request Date'} absolute={true} x={'20px'} y={'76px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'request_date2'} size={'xs'} absolute={true} x={'224px'} y={'76px'} width={'92px'}/>
                <Button size={'xs'} absolute={true} x={'512px'} y={'8px'} width={'68px'} height={'24px'}>Group</Button>
                <Button size={'xs'} absolute={true} x={'436px'} y={'8px'} width={'72px'} height={'24px'}>Branch</Button>
                <Button size={'xs'} absolute={true} x={'20px'} y={'8px'} width={'52px'} height={'24px'}>Query</Button>
                <Button size={'xs'} absolute={true} x={'76px'} y={'8px'} width={'52px'} height={'24px'}>Clear</Button>
                <Input field={'request_date1'} size={'xs'} absolute={true} x={'448px'} y={'76px'} width={'92px'}/>
                <Label sm={true} text={'Request By'} absolute={true} x={'356px'} y={'75px'} width={'84px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FLogQuery;
