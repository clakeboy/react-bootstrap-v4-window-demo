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
class FAbioMaster extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abio_master';
		this.title = 'Customs Status Query';
        if (!this.props.width) {
            this.props.width = '844px';
        }
        if (!this.props.height) {
            this.props.height = '504px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Tabs sm={true} border={true} absolute={true} x={'0px'} y={'0px'} width={'844px'} height={'504px'}>
                    <TabsContent id='Manifest' text='Manifest' active>
                        <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'136px'} y={'43px'} width={'112px'}/>
                        <Label sm={true} text={'Master B/L No.'} absolute={true} x={'32px'} y={'43px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'16px'} y={'81px'} width={'404px'} height={'110px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                        <Checkbox absolute={true} x={'368px'} y={'158px'}/>
                        <Label sm={true} text={'ISF on File'} absolute={true} x={'264px'} y={'153px'} width={'96px'} height={'19px'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'420px'} y={'81px'} width={'404px'} height={'110px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                        <Button size={'xs'} absolute={true} x={'740px'} y={'43px'} width={'80px'} height={'24px'}>Requery</Button>
                        <Input field={'file_doc_number'} size={'xs'} absolute={true} x={'136px'} y={'124px'} width={'112px'}/>
                        <Label sm={true} text={'File Number'} absolute={true} x={'32px'} y={'124px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'status_desc'} size={'xs'} absolute={true} x={'324px'} y={'43px'} width={'96px'}/>
                        <Label sm={true} text={'Status'} absolute={true} x={'264px'} y={'43px'} width={'52px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'group_code'} size={'xs'} absolute={true} x={'136px'} y={'96px'} width={'112px'}/>
                        <Label sm={true} text={'Group Code'} absolute={true} x={'32px'} y={'96px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'manifest_quantity'} size={'xs'} absolute={true} x={'136px'} y={'153px'} width={'64px'}/>
                        <Label sm={true} text={'Total Package'} absolute={true} x={'32px'} y={'153px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'quantity_unit'} size={'xs'} absolute={true} x={'208px'} y={'153px'} width={'40px'}/>
                        <Input field={'hbl_count'} size={'xs'} absolute={true} x={'368px'} y={'96px'} width={'28px'}/>
                        <Label sm={true} text={'No. of Houses'} absolute={true} x={'264px'} y={'96px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'request_count'} size={'xs'} absolute={true} x={'368px'} y={'124px'} width={'28px'}/>
                        <Label sm={true} text={'Request Times'} absolute={true} x={'264px'} y={'124px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'conveyance_name'} size={'xs'} absolute={true} x={'512px'} y={'96px'} width={'140px'}/>
                        <Label sm={true} text={'Vessel'} absolute={true} x={'436px'} y={'96px'} width={'68px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'departure_port_name'} size={'xs'} absolute={true} x={'512px'} y={'124px'} width={'140px'}/>
                        <Label sm={true} text={'Loading'} absolute={true} x={'436px'} y={'124px'} width={'68px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'arrival_port_name'} size={'xs'} absolute={true} x={'512px'} y={'153px'} width={'140px'}/>
                        <Label sm={true} text={'Discharge'} absolute={true} x={'436px'} y={'153px'} width={'68px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'manifest_number'} size={'xs'} absolute={true} x={'660px'} y={'96px'} width={'52px'}/>
                        <Input field={'FIRMS_code'} size={'xs'} absolute={true} x={'760px'} y={'96px'} width={'40px'}/>
                        <Label sm={true} text={'Firm'} absolute={true} x={'720px'} y={'96px'} width={'32px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'departure_date'} size={'xs'} absolute={true} x={'660px'} y={'124px'} width={'140px'}/>
                        <Input field={'arrival_date'} size={'xs'} absolute={true} x={'660px'} y={'153px'} width={'140px'}/>
                        <CTable absolute x={'16px'} y={'192px'} width={'807px'} height={'291px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'SCAC'} field={'issuer_code'} width={'52px'}/>
                            <Table.Header text={'B/L Number'} field={'bl_no'} width={'152px'}/>
                            <Table.Header text={'B/L'} field={'ibl_no_type_desc'} width={'36px'}/>
                            <Table.Header text={'Status Date'} field={'event_date'} width={'124px'}/>
                            <Table.Header text={'Status'} field={'disposition_code'} width={'48px'}/>
                            <Table.Header text={'Message'} field={'ams_disposition_name'} width={'320px'}/>
                            <Table.Header text={'Packages'} field={'manifest_quantity'} width={'72px'}/>
                        </CTable>
                    </TabsContent>
                    <TabsContent id='Inbond' text='Inbond'>
                        <CTable absolute x={'16px'} y={'86px'} width={'807px'} height={'398px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Inbond No.'} field={'last_modified_date'} width={'100px'}/>
                            <Table.Header text={'Inbond  Origin'} field={'inbond_origin_port_name'} width={'108px'}/>
                            <Table.Header text={'Inbond Dest'} field={'inbond_dest_port_name'} width={'108px'}/>
                            <Table.Header text={'MIT'} field={'mit_sw'} width={'36px'}/>
                            <Table.Header text={'Authorized'} field={'inbond_auth_date'} width={'84px'}/>
                            <Table.Header text={'Inbond Arrived'} field={'Text195'} width={'108px'}/>
                            <Table.Header text={'Export Date'} field={'inbond_export_date'} width={'108px'}/>
                            <Table.Header text={'Package'} field={'inbond_quantity'} width={'52px'}/>
                            <Table.Header text={'I.T. Complete'} field={'it_complete_date'} width={'108px'}/>
                        </CTable>
                        <Input field={'ptt_auth_date'} size={'xs'} absolute={true} x={'388px'} y={'43px'} width={'140px'}/>
                        <Label sm={true} text={'PTT Authorized'} absolute={true} x={'280px'} y={'43px'} width={'100px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'124px'} y={'43px'} width={'116px'}/>
                        <Label sm={true} text={'Master B/L No.'} absolute={true} x={'20px'} y={'43px'} width={'96px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                    </TabsContent>
                </Tabs>
            </React.Fragment>
        );
    }
}

export default FAbioMaster;
