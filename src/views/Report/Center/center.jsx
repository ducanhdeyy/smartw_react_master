import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import './center.css'; 
import ReportComponent from '../../../components/ReportComponent/title';

const data = [
    {
        no: 1,
        ngay: '15/08/2024',
        trungTam: 'TT_NOC',
        alarmAckOntime: '99.37',
        ttCreate: '67',
        ttCreateOntime: '97.01',
        alarmMustCreate: '1825',
        alarmCreatedTotal: '99.89',
        alarmCreatedCore: '90.91',
        alarmCreatedRan: '100',
        ttHanding: '16',
        ttHandingOntimeTotal: '100',
        ttHandingOntimeAuto: '100',
        ttHandingOntimeManual: '100',
        ttPendingAuto: '0',
        ttPendingManual: '0',
        alarmClear: '99.84',
        ptExecute: '0',
        ptRootCauseOntime: '100',
        cmExecute: '47',
    },
    {
        no: 2,
        ngay: '16/08/2024',
        trungTam: 'TT_NOC',
        alarmAckOntime: '97.50',
        ttCreate: '60',
        ttCreateOntime: '95.00',
        alarmMustCreate: '1900',
        alarmCreatedTotal: '98.50',
        alarmCreatedCore: '92.50',
        alarmCreatedRan: '99.00',
        ttHanding: '20',
        ttHandingOntimeTotal: '98.00',
        ttHandingOntimeAuto: '97.00',
        ttHandingOntimeManual: '99.00',
        ttPendingAuto: '5',
        ttPendingManual: '2',
        alarmClear: '98.00',
        ptExecute: '5',
        ptRootCauseOntime: '95.00',
        cmExecute: '50',
    },
];

const TableComponent = () => {
    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="No." rowSpan={2} frozen />
                <Column header="Ngày" rowSpan={2}  frozen />
                <Column header="Trung tâm" rowSpan={2} frozen />
                <Column header="Quy trình quản lý sự kiện" colSpan={6} />
                <Column header="Quy trình quản lý sự cố" colSpan={7} />
                <Column header="Quy trình quản lý vấn đề" colSpan={3} />
            </Row>
            <Row>
                <Column header="ALARM ACK ONTIME (%)" field="alarmAckOntime"  sortable />
                <Column header="TT CREATE" field="ttCreate" sortable />
                <Column header="TT CREATE ONTIME (%)" field="ttCreateOntime"  sortable />
                <Column header="ALARM MUST CREATE" field="alarmMustCreate"  sortable />
                <Column header="ALARM CREATED (%) - TOTAL" field="alarmCreatedTotal"  sortable />
                <Column header="ALARM CREATED (%) - CORE" field="alarmCreatedCore"  sortable />
                <Column header="ALARM CREATED (%) - RAN" field="alarmCreatedRan"  sortable />

                <Column header="TT HANDING" field="ttHanding" sortable />
                <Column header="TT HANDING ONTIME (%) - TOTAL" field="ttHandingOntimeTotal"  sortable />
                <Column header="TT HANDING ONTIME (%) - AUTO" field="ttHandingOntimeAuto"  sortable />
                <Column header="TT HANDING ONTIME (%) - MANUAL" field="ttHandingOntimeManual"  sortable />
                <Column header="TT PENDING 3 DAY - AUTO" field="ttPendingAuto"  sortable />
                <Column header="TT PENDING 3 DAY - MANUAL" field="ttPendingManual"  sortable />
                <Column header="ALARM CLEAR (%)" field="alarmClear"  sortable />

                <Column header="PT EXECUTE" field="ptExecute" sortable />
                <Column header="PT ROOTCAUSE ONTIME (%)" field="ptRootCauseOntime"  sortable />
                <Column header="CM EXECUTE" field="cmExecute" sortable />
            </Row>
        </ColumnGroup>
    );

    return (
        <>
            <ReportComponent label="TRUNG TÂM" />
            <div className="card" style={{ marginTop: '2rem' }}>
                <DataTable
                    value={data}
                    scrollable
                    scrollHeight="400px"
                    headerColumnGroup={headerGroup}
                    className="custom-datatable"
                >
                    <Column field="no" frozen sortable />
                    <Column field="ngay" frozen sortable />
                    <Column field="trungTam" frozen sortable />

                    <Column field="alarmAckOntime"  sortable />
                    <Column field="ttCreate"  sortable />
                    <Column field="ttCreateOntime"  sortable />
                    <Column field="alarmMustCreate"  sortable />
                    <Column field="alarmCreatedTotal"  sortable />
                    <Column field="alarmCreatedCore"  sortable />
                    <Column field="alarmCreatedRan"  sortable />

                    <Column field="ttHanding" sortable />
                    <Column field="ttHandingOntimeTotal"  sortable />
                    <Column field="ttHandingOntimeAuto"  sortable />
                    <Column field="ttHandingOntimeManual"  sortable />
                    <Column field="ttPendingAuto"  sortable />
                    <Column field="ttPendingManual"  sortable />
                    <Column field="alarmClear"  sortable />

                    <Column field="ptExecute" sortable />
                    <Column field="ptRootCauseOntime"  sortable />
                    <Column field="cmExecute" sortable />
                </DataTable>
            </div>
        </>
    );
};


export default TableComponent;
