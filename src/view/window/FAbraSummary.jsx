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
class FAbraSummary extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abra_summary';
		this.title = 'Review Customs Status -  House Summary';
        if (!this.props.width) {
            this.props.width = '840px';
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
                <CTable absolute x={'20px'} y={'80px'} width={'800px'} height={'427px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'House No.'} field={'house_no'} width={'108px'}/>
                    <Table.Header text={'Last'} field={'last_disposition_code'} width={'44px'}/>
                    <Table.Header text={'Released Date'} field={'released_date'} width={'108px'}/>
                    <Table.Header text={'Qty'} field={'manifest_quantity'} width={'56px'}/>
                    <Table.Header text={'Hold'} field={'sum_manifest_quantity'} width={'40px'}/>
                    <Table.Header text={'Hold Date'} field={'hold_disposition_code'} width={'108px'}/>
                    <Table.Header text={'Hold Removed'} field={'hold_date'} width={'108px'}/>
                    <Table.Header text={'Inbond No.'} field={'hold_removed_date'} width={'84px'}/>
                    <Table.Header text={'I.T. Authorized'} field={'inbond_number'} width={'108px'}/>
                    <Table.Header text={'Arrival Date'} field={'inbond_auth_date'} width={'108px'}/>
                    <Table.Header text={'T.E. -  Export'} field={'inbond_arrival_date'} width={'108px'}/>
                    <Table.Header text={'I.T. Completed'} field={'inbond_export_date'} width={'108px'}/>
                    <Table.Header text={'Last Event Date'} field={'it_complete_date'} width={'108px'}/>
                    <Table.Header text={'Last Status Desc'} field={'last_event_date'} width={'140px'}/>
                </CTable>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'100px'} y={'16px'} width={'120px'}/>
                <Label sm={true} text={'MAWB No.'} absolute={true} x={'20px'} y={'16px'} width={'72px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'airline'} size={'xs'} absolute={true} x={'100px'} y={'44px'} width={'120px'}/>
                <Label sm={true} text={'Airline'} absolute={true} x={'20px'} y={'44px'} width={'72px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FAbraSummary;
