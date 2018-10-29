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
class FAbhQuery extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abh_query';
		this.title = 'Query House History';
        if (!this.props.width) {
            this.props.width = '792px';
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
                <CTable absolute x={'20px'} y={'116px'} width={'752px'} height={'392px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'Seq No.'} field={'abi_hbl_id'} width={'52px'}/>
                    <Table.Header text={'SCAC'} field={'issuer_code'} width={'48px'}/>
                    <Table.Header text={'House No.'} field={'house_no'} width={'104px'}/>
                    <Table.Header text={'Master B/L No.'} field={'master_bl_no'} width={'124px'}/>
                    <Table.Header text={'Last'} field={'last_disposition_code'} width={'44px'}/>
                    <Table.Header text={'Released Date'} field={'released_date'} width={'104px'}/>
                    <Table.Header text={'Qty'} field={'manifest_quantity'} width={'56px'}/>
                    <Table.Header text={'ISF Match'} field={'isf_matched'} width={'104px'}/>
                    <Table.Header text={'1Y Date'} field={'carrier_matched'} width={'104px'}/>
                    <Table.Header text={'1J Date'} field={'inbond_auth_date'} width={'104px'}/>
                    <Table.Header text={'Inland ARR'} field={'inbond_arrival_date'} width={'104px'}/>
                    <Table.Header text={'T && E Export'} field={'inbond_export_date'} width={'104px'}/>
                    <Table.Header text={'I.T. Completed'} field={'it_complete_date'} width={'104px'}/>
                    <Table.Header text={'Hold'} field={'hold_disposition_code'} width={'44px'}/>
                    <Table.Header text={'Hold Date'} field={'hold_date'} width={'104px'}/>
                    <Table.Header text={'Hold Removed'} field={'hold_removed_date'} width={'104px'}/>
                    <Table.Header text={'ETA'} field={'arrival_date'} width={'80px'}/>
                    <Table.Header text={'Departure'} field={'departure_port_name'} width={'76px'}/>
                    <Table.Header text={'Discharge'} field={'arrival_port_name'} width={'76px'}/>
                    <Table.Header text={'I.T. No.'} field={'inbond_number'} width={'80px'}/>
                    <Table.Header text={'I.T. Origin'} field={'inbond_origin_port_name'} width={'88px'}/>
                    <Table.Header text={'I.T. Dest'} field={'inbond_dest_port_name'} width={'88px'}/>
                    <Table.Header text={'Group'} field={'group_code'} width={'64px'}/>
                </CTable>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'100px'} y={'76px'} width={'120px'}/>
                <Label sm={true} text={'Master No.'} absolute={true} x={'20px'} y={'76px'} width={'72px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'house_no'} size={'xs'} absolute={true} x={'100px'} y={'48px'} width={'120px'}/>
                <Label sm={true} text={'House No.'} absolute={true} x={'20px'} y={'48px'} width={'72px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'last_event_date1'} size={'xs'} absolute={true} x={'524px'} y={'76px'} width={'100px'}/>
                <Label sm={true} text={'Last Event'} absolute={true} x={'448px'} y={'76px'} width={'68px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'arrival_date1'} size={'xs'} absolute={true} x={'524px'} y={'48px'} width={'100px'}/>
                <Label sm={true} text={'E T A'} absolute={true} x={'448px'} y={'48px'} width={'68px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'last_event_date2'} size={'xs'} absolute={true} x={'632px'} y={'76px'} width={'100px'}/>
                <Input field={'arrival_date2'} size={'xs'} absolute={true} x={'632px'} y={'48px'} width={'100px'}/>
                <Input field={'departure_port_code'} size={'xs'} absolute={true} x={'324px'} y={'48px'} width={'100px'}/>
                <Label sm={true} text={'Departure'} absolute={true} x={'244px'} y={'48px'} width={'72px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'arrival_port_code'} size={'xs'} absolute={true} x={'324px'} y={'76px'} width={'100px'}/>
                <Label sm={true} text={'Discharge'} absolute={true} x={'244px'} y={'76px'} width={'72px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Button size={'xs'} absolute={true} x={'20px'} y={'8px'} width={'52px'} height={'24px'}>Query</Button>
                <Button size={'xs'} absolute={true} x={'76px'} y={'8px'} width={'52px'} height={'24px'}>Clear</Button>
            </React.Fragment>
        );
    }
}

export default FAbhQuery;
