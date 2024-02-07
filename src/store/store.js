import { makeObservable, observable, action } from "mobx";
import { addServiceToServer } from './server';


class DataStore {
    isLogin = false;
    isMeeting = true;
    services = [];
    meetings = [];
    businessData = null;


    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            services: observable,
            setServices: action,
            addService: action,
            meetings: observable,
            setMeetings: action,
            addMeeting: action,
            businessData: observable,
            setBusinessData: action,
            editBusinessData: action,
            isMeeting: observable,
            setIsMeeting: action,

        })
    }

    setIsLogin(status) {
        this.isLogin = status;
    }
    setServices = (service) => {

        if (Object.keys(service).length === 0) {
            defaultServices.map(s => addServiceToServer(s))
        }
        else {
            this.services = service;
        }
    }

    addService = (addService) => {

        this.services = [...this.services, addService];
    }

    setMeetings = (meeting) => {
        this.meetings = meeting;

    }
    addMeeting = (meeting) => {
        this.meetings = [...this.meetings, meeting]
    }

    setIsMeeting = (status) => {
        this.isMeeting = status;
    }

    setBusinessData = (data) => {

        if (data !== undefined && data.name !== undefined) {
            this.businessData = data;
        }
        else {
            this.businessData = defaultBusinessData;
        }

    }

    editBusinessData(formData) {
        this.businessData = formData;
    }
};
export default new DataStore();

const defaultBusinessData = {
    name: "Golden Hands",
    address: "Geula 55, Jerusalem",
    phone: "053-311-1444",
    email: "gold@gmail.com",
    owner: "Goldy Lev",
    logo: '../logo2.png',
    description: "When art and service meet, a luxurious and perfect look is created just for you!"
}
const defaultServices = [{
    name: "haircut",
    description: "Haircut with a perfect design",
    price: '20$',
    duration: '20 minutes',
},
{
    name: "makeup",
    description: "Custom luxury makeup",
    price: '100$',
    duration: 'hour',
},
{
    name: "Combing a wig",
    description: "combing a wig that lasts for a long time",
    price: '45$',
    duration: '30 minutes',
},
]
