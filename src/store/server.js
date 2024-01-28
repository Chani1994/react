import axios from 'axios';
import DataStore from './store.js';

export async function getServices() {
    try {
    const response = await axios.get('http://localhost:8787/services');
    const services = response.data;
    DataStore.setServices(services);
    return ;
    } catch (error) {
    console.error(error);
    }
}
export async function addService(service) {
    const res = await axios.post('http://localhost:8787/service', service);
    if (res.status === 200) {
        DataStore.addService(service);
        return 'success';}
    else {return 'failed';}
}
export async function getMeetings() {
    try{
    const response = await axios.get('http://localhost:8787/appointments');
    const meetings = response.data;
    DataStore.setMeetings(meetings);
    return ;
} catch (error) {console.error(error); }
}
export async function addMeeting(meeting) {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
        if (res.status === 200) {
            DataStore.addMeeting(meeting);
            return 'success';}
        else {return 'failed';}
    }
    export async function getBusinessData() {
        try {
          const response = await axios.get('http://localhost:8787/businessData');
          const businessData = response.data;
          DataStore.setBusinessData(businessData);
          return ; } catch (error) {console.error(error);}
    } 
    export async function updateBusinessData(businessData) {
        const res = await axios.post('http://localhost:8787/businessData', businessData);
        if (res.status === 200) {
            DataStore.editBusinessData(businessData);
            return 'success';}
        else { return 'failed';}
    }
    