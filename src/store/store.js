import { makeObservable, observable, action } from "mobx";

class DataStore {
    isLogin = false;
    services = [];
    meetings = [];
    businessData=null;
    
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
            businessData:observable,
            setBusinessData:action,
            editBusinessData:action,
        })
    }
    setIsLogin(status) {
        this.isLogin = status;
    }

    setServices = (service) => {
        this.services = service;
    }

    // addService = (addService) => {
    //     this.services = [...this.services, {id:addService.id, name:addService.name, 
    //      description:addService.description, price:addService.price, duration:addService.duration}];
    // }
    addService = (addService) => {
        this.services = [...this.services,addService ];
    }
    // setMeetings=(meeting)=>{
    //     this.meetings=meeting;
    // }
    setMeetings = (meeting) => {
        this.meetings = meeting.sort((a, b) => {
          // Convert the date strings to Date objects
          const dateA = new Date(a.dateTime);
          const dateB = new Date(b.dateTime);
    
          // Compare the dates
          return dateA - dateB;
        });
      }
   
    // addMeeting=(meeting)=>{
    //     this.meetings=[...this.meetings, { id:meeting.id, serviceType:meeting.serviceType, 
    //     dateTime:meeting.dateTime, clientName: meeting.Name,
    //     Phone: meeting.Phone, Email: meeting.Email}]
    // }
    addMeeting=(meeting)=>{
        this.meetings=[...this.meetings, meeting]
    }
    // setBusinessData(businessData) {
    //     this.businessData = businessData;
    //   }
    setBusinessData = (data) => {
        if (data.length > 0) {
            this.businessData = data;
        }
        else {
            this.businessData = defaultBusinessData;
        }
    }
    
    editBusinessData(formData) {
        this.businessData = {name:formData.name, address:formData.address,  phone:formData.phone, owner:formData.owner, logo:formData.logo, description:formData.description};
    }

    
 
};

export default new DataStore();
const defaultBusinessData = {
          name: "Coding Academy",
          address: "123 Main Street",
          phone: "555-1234",
          owner: "John Doe",
          logo: "https://example.com/logo.png",
          description: "A coding academy that offers courses on web development."
        }
       