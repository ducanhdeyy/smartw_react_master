import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReportComponent from '../../../components/ReportComponent/title';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Province() {
    const [customers, setCustomers] = useState(null); 
    const [balanceFrozen, setBalanceFrozen] = useState(false);

    useEffect(() => {
        // Giả sử gọi API từ backend
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setCustomers(data))
            .catch(() => setCustomers([]));
    }, []);

    const balanceTemplate = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value ? value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : 'N/A';
    };

    return (
        <>
            <ReportComponent label="TỈNH" />
            <div className="card">
                {customers === null ? (
                    <div className="flex justify-content-center align-items-center" style={{ height: '250px' }}>
                        <ProgressSpinner />
                    </div>
                ) : customers.length > 0 ? (
                    <DataTable value={customers} scrollable scrollHeight="250px" className="mt-4 pl-3 z-0">
                        <Column field="id" header="No." style={{ minWidth: '100px' }} frozen></Column>
                        <Column field="name" header="Năm" style={{ minWidth: '200px' }} frozen></Column>
                        <Column field="name" header="Center" style={{ minWidth: '200px' }} frozen></Column>
                        <Column field="email" header="Email" style={{ minWidth: '200px' }}></Column>
                        <Column field="address.city" header="City" style={{ minWidth: '200px' }}></Column>
                        <Column field="company.name" header="Company" style={{ minWidth: '200px' }}></Column>
                        <Column field="phone" header="Phone" style={{ minWidth: '200px' }}></Column>
                        <Column field="website" header="Website" style={{ minWidth: '200px' }}></Column>
                        <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '200px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
                    </DataTable>
                ) : (
                    <p className="text-center p-5">No data</p>
                )}
            </div>
        </>
    );
}
