import React from 'react';
import './center.css'; 
import ReportComponent from '../../../components/ReportComponent/title';
import DataTableComponent from '../../../components/TableManageComponent/index';

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
    return (
        <>
            <ReportComponent label="TRUNG TÂM" />
            <DataTableComponent data={data}/>
        </>
    );
};


export default TableComponent;
