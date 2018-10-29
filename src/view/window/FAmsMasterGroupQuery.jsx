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
class FAmsMasterGroupQuery extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_ams_master_group_query';
		this.title = 'Query Master Only';
        if (!this.props.width) {
            this.props.width = '788px';
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
                <CTable absolute x={'20px'} y={'116px'} width={'748px'} height={'392px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'Seq No.'} field={'abi_master_id'} width={'52px'}/>
                    <Table.Header text={'Group'} field={'group_code'} width={'72px'}/>
                    <Table.Header text={'Br'} field={'branch_code'} width={'40px'}/>
                    <Table.Header text={'Master B/L No.'} field={'master_bl_no'} width={'140px'}/>
                    <Table.Header text={'File No.'} field={'file_doc_number'} width={'96px'}/>
                    <Table.Header text={'Times'} field={'request_count'} width={'40px'}/>
                    <Table.Header text={'Last Request By'} field={'modified_by_code'} width={'96px'}/>
                    <Table.Header text={'Last Request Date'} field={'modified_date'} width={'108px'}/>
                    <Table.Header text={'First  By'} field={'created_by_code'} width={'96px'}/>
                    <Table.Header text={'First Request Date'} field={'created_date'} width={'108px'}/>
                </CTable>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'100px'} y={'48px'} width={'120px'}/>
                <Label sm={true} text={'Master No.'} absolute={true} x={'20px'} y={'48px'} width={'72px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'MOT'} size={'xs'} absolute={true} x={'304px'} y={'76px'} width={'72px'}/>
                <Label sm={true} text={'Branch'} absolute={true} x={'244px'} y={'76px'} width={'52px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'group_code'} size={'xs'} absolute={true} x={'304px'} y={'48px'} width={'72px'}/>
                <Label sm={true} text={'Group'} absolute={true} x={'244px'} y={'48px'} width={'52px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Button size={'xs'} absolute={true} x={'20px'} y={'8px'} width={'52px'} height={'24px'}>Query</Button>
                <Button size={'xs'} absolute={true} x={'76px'} y={'8px'} width={'52px'} height={'24px'}>Clear</Button>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'100px'} y={'76px'} width={'120px'}/>
                <Label sm={true} text={'File No.'} absolute={true} x={'20px'} y={'76px'} width={'72px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'arrival_date1'} size={'xs'} absolute={true} x={'512px'} y={'48px'} width={'100px'}/>
                <Label sm={true} text={'Last Request By'} absolute={true} x={'400px'} y={'48px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'last_modified_date1'} size={'xs'} absolute={true} x={'512px'} y={'76px'} width={'100px'}/>
                <Label sm={true} text={'First  By'} absolute={true} x={'400px'} y={'76px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FAmsMasterGroupQuery;
