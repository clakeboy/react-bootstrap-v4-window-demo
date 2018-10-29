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
    Box,
    Form,
    CKModal
} from '@clake/react-bootstrap4';
import {
    CTable
} from '@clake/react-bootstrap4-window';
class FAbiaMaster extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abia_master';
		this.title = 'Customs Status Query';
        if (!this.props.width) {
            this.props.width = '844px';
        }
        if (!this.props.height) {
            this.props.height = '523px';
        }

        this.state = {
            //query state
            queryColumns:{}
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        //用setTimeout 模拟后端取值
        this.modal.loading('Loading');
        setTimeout(()=>{
            this.modal.close();
            let data = {
                master_bl_no: '设置 MASTER值',
                file_doc_number: '设置 File值'
            };
            this.setState({
                queryColumns:data
            })
        },1000)
    }

    queryHandler = ()=>{
        //得到数据,显示到控制台
        console.log(this.form1.getValues());
    };

    render() {
        return (
            <React.Fragment>
                <Tabs sm={true} border={true} absolute={true} x={'0px'} y={'1px'} width={'844px'} height={'522px'}>
                    <TabsContent id='ManifestStatus' text='Manifest Status' active>
                        <Form ref={c=>this.form1=c}>
                            <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'112px'} y={'43px'} width={'112px'} data={this.state.queryColumns.master_bl_no}/>
                            <Label sm={true} text={'MAWB No.'} absolute={true} x={'32px'} y={'43px'} width={'72px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Box absolute={true} x={'16px'} y={'76px'} width={'452px'} height={'76px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                            <Box absolute={true} x={'468px'} y={'76px'} width={'356px'} height={'76px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                            <Button size={'xs'} absolute={true} x={'740px'} y={'43px'} width={'80px'} height={'24px'} onClick={
                                this.queryHandler
                            }>Requery</Button>
                            <Input field={'file_doc_number'} size={'xs'} absolute={true} x={'112px'} y={'120px'} width={'112px'} data={this.state.queryColumns.file_doc_number}/>
                            <Label sm={true} text={'File No.'} absolute={true} x={'32px'} y={'120px'} width={'72px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'status_desc'} size={'xs'} absolute={true} x={'296px'} y={'43px'} width={'96px'}/>
                            <Label sm={true} text={'Status'} absolute={true} x={'240px'} y={'43px'} width={'48px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'group_code'} size={'xs'} absolute={true} x={'112px'} y={'91px'} width={'112px'}/>
                            <Label sm={true} text={'EF Group'} absolute={true} x={'32px'} y={'91px'} width={'72px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'airline'} size={'xs'} absolute={true} x={'292px'} y={'91px'} width={'152px'}/>
                            <Label sm={true} text={'Airline'} absolute={true} x={'240px'} y={'91px'} width={'44px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'icao_airline_code'} size={'xs'} absolute={true} x={'396px'} y={'120px'} width={'48px'}/>
                            <Label sm={true} text={'ICAO'} absolute={true} x={'348px'} y={'120px'} width={'40px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'manifest_quantity'} size={'xs'} absolute={true} x={'560px'} y={'91px'} width={'64px'}/>
                            <Label sm={true} text={'Package'} absolute={true} x={'484px'} y={'91px'} width={'68px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'FIRMS_code'} size={'xs'} absolute={true} x={'560px'} y={'120px'} width={'64px'}/>
                            <Label sm={true} text={'Firm Code'} absolute={true} x={'484px'} y={'120px'} width={'68px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <CTable absolute x={'16px'} y={'163px'} width={'807px'} height={'71px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                                <Table.Header text={'ID'} field={'part_indicator'} width={'28px'}/>
                                <Table.Header text={'Flight ID'} field={'flight_id'} width={'76px'}/>
                                <Table.Header text={'ETD'} field={'atd_date'} width={'88px'}/>
                                <Table.Header text={'ETA'} field={'arrival_date'} width={'88px'}/>
                                <Table.Header text={'Boarded'} field={'boarded_quantity'} width={'60px'}/>
                                <Table.Header text={'Pkg'} field={'manifest_quantity'} width={'60px'}/>
                                <Table.Header text={'I.T. Number'} field={'inbond_number'} width={'104px'}/>
                                <Table.Header text={'Type'} field={'it_type_desc'} width={'64px'}/>
                                <Table.Header text={'Code'} field={'inbond_status'} width={'56px'}/>
                                <Table.Header text={'I.T. Status'} field={'ibond_status_desc'} width={'144px'}/>
                                <Table.Header text={'ICAO'} field={'icao_airline_code'} width={'36px'}/>
                            </CTable>
                            <Input field={'iata_airline_code'} size={'xs'} absolute={true} x={'292px'} y={'120px'} width={'36px'}/>
                            <Label sm={true} text={'IATA'} absolute={true} x={'240px'} y={'120px'} width={'44px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'hbl_count'} size={'xs'} absolute={true} x={'756px'} y={'91px'} width={'44px'}/>
                            <Label sm={true} text={'No. of House'} absolute={true} x={'644px'} y={'91px'} width={'104px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <Input field={'request_count'} size={'xs'} absolute={true} x={'756px'} y={'120px'} width={'44px'}/>
                            <Label sm={true} text={'Request Count'} absolute={true} x={'644px'} y={'120px'} width={'104px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                            <CTable absolute x={'16px'} y={'240px'} width={'807px'} height={'263px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                                <Table.Header text={'ID'} field={'part_indicator'} width={'28px'}/>
                                <Table.Header text={'B/L No.'} field={'master_bl_no'} width={'120px'}/>
                                <Table.Header text={'B/L'} field={'ibl_no_type_desc'} width={'28px'}/>
                                <Table.Header text={'Event Date'} field={'event_date'} width={'120px'}/>
                                <Table.Header text={'Status'} field={'disposition_code'} width={'52px'}/>
                                <Table.Header text={'Status Description'} field={'disposition_desc'} width={'336px'}/>
                                <Table.Header text={'Boarded'} field={'boarded_quantity'} width={'60px'}/>
                                <Table.Header text={'Package'} field={'manifest_quantity'} width={'60px'}/>
                            </CTable>
                        </Form>
                    </TabsContent>
                    <TabsContent id='HouseInbond' text='House Inbond'>
                        <CTable absolute x={'16px'} y={'48px'} width={'807px'} height={'455px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'House No.'} field={'house_no'} width={'112px'}/>
                            <Table.Header text={'Inbond No.'} field={'inbond_number'} width={'112px'}/>
                            <Table.Header text={'Type'} field={'inbond_type'} width={'52px'}/>
                            <Table.Header text={'I.T.  Authorized'} field={'inbond_auth_date'} width={'120px'}/>
                            <Table.Header text={'Arrival Date'} field={'inbond_arrival_date'} width={'120px'}/>
                            <Table.Header text={'Export Date'} field={'inbond_export_date'} width={'120px'}/>
                            <Table.Header text={'I.T. Complete'} field={'it_complete_date'} width={'120px'}/>
                        </CTable>
                    </TabsContent>
                </Tabs>
                <CKModal ref={c=>this.modal=c} center/>
            </React.Fragment>
        );
    }
}

export default FAbiaMaster;
