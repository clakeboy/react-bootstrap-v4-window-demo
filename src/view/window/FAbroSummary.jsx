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
class FAbroSummary extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abro_summary';
		this.title = 'Review Customs Status -  House Summary';
        if (!this.props.width) {
            this.props.width = '855px';
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
                <CTable absolute x={'20px'} y={'88px'} width={'816px'} height={'420px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'SCAC'} field={'issuer_code'} width={'48px'}/>
                    <Table.Header text={'House No.'} field={'house_no'} width={'108px'}/>
                    <Table.Header text={'Last'} field={'last_disposition_code'} width={'44px'}/>
                    <Table.Header text={'Released Date'} field={'released_date'} width={'108px'}/>
                    <Table.Header text={'Qty'} field={'manifest_quantity'} width={'56px'}/>
                    <Table.Header text={'ISF Match'} field={'sum_manifest_quantity'} width={'108px'}/>
                    <Table.Header text={'1Y Date'} field={'isf_matched'} width={'108px'}/>
                    <Table.Header text={'Hold'} field={'carrier_matched'} width={'44px'}/>
                    <Table.Header text={'Hold Date'} field={'hold_disposition_code'} width={'108px'}/>
                    <Table.Header text={'Hold Removed'} field={'hold_date'} width={'108px'}/>
                    <Table.Header text={'1J Date'} field={'hold_removed_date'} width={'108px'}/>
                    <Table.Header text={'Inbond Arrival'} field={'inbond_auth_date'} width={'108px'}/>
                    <Table.Header text={'T.E. -  Export'} field={'inbond_arrival_date'} width={'108px'}/>
                    <Table.Header text={'I.T. Completed'} field={'inbond_export_date'} width={'108px'}/>
                    <Table.Header text={'Last Event Date'} field={'it_complete_date'} width={'108px'}/>
                    <Table.Header text={'Last Status Desc'} field={'last_event_date'} width={'140px'}/>
                </CTable>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'128px'} y={'20px'} width={'112px'}/>
                <Label sm={true} text={'Master B/L No.'} absolute={true} x={'20px'} y={'20px'} width={'100px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'departure_port_name'} size={'xs'} absolute={true} x={'368px'} y={'20px'} width={'124px'}/>
                <Label sm={true} text={'Loading'} absolute={true} x={'292px'} y={'20px'} width={'68px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'arrival_port_name'} size={'xs'} absolute={true} x={'368px'} y={'48px'} width={'124px'}/>
                <Label sm={true} text={'Discharge'} absolute={true} x={'292px'} y={'48px'} width={'68px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'departure_date'} size={'xs'} absolute={true} x={'500px'} y={'20px'} width={'124px'}/>
                <Input field={'arrival_date'} size={'xs'} absolute={true} x={'500px'} y={'48px'} width={'124px'}/>
                <Input field={'file_doc_number'} size={'xs'} absolute={true} x={'128px'} y={'48px'} width={'112px'}/>
                <Label sm={true} text={'File Number'} absolute={true} x={'20px'} y={'48px'} width={'100px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FAbroSummary;
