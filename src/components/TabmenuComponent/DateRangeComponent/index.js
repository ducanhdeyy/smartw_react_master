import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from "primereact/inputmask";
import { Button } from 'primereact/button';

//axios api
import axios from 'axios';

export default function DateRangeComponent() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    //api
    const [cities, setCities] = useState([]);

    //get api axios
    useEffect(() => {
        const apiUrl = 'https://esgoo.net/api-tinhthanh/1/0.htm';

        axios.get(apiUrl)
            .then((response) => {
                console.log('API response:', response.data);

                // Kiểm tra phản hồi từ API và đặt dữ liệu vào state
                if (response.data.error === 0 && Array.isArray(response.data.data)) {
                    const formattedCities = response.data.data.map(city => ({
                        name: city.name, 
                        id: city.id
                    }));
                    setCities(formattedCities);
                } else {
                    console.error('API error:', response.data.error_text);
                }
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
            });
    }, []);

    return (
        <form>
            <div className="card-selector justify-content-center pl-4 mt-5">
                <b className='mr-5'>Trung tâm</b>
                <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    editable
                    placeholder="Select a City"
                    className="w-full md:w-10rem"
                />
                <b className='m-4'>Từ ngày</b>
                <InputMask className='text-center'
                    type='text'
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    mask="99/99/9999" 
                    placeholder="dd/mm/yyyy" 
                    slotChar="dd/mm/yyyy"
                />
                <b className='m-4'>Đến ngày</b>
                <InputMask 
                    className='mr-4 text-center' 
                    type='text'
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                    mask="99/99/9999" 
                    placeholder="dd/mm/yyyy" 
                    slotChar="dd/mm/yyyy"
                />
                <Button label="Tìm kiếm" className="surface-50 text-color" />
            </div>
        </form>
    );
}
