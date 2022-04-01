import { formatDate } from '@angular/common';
export class Appointments {
  id: number;
  img: string;
  name: string;
  dateTime: string;
  type : string;
  status : String;
  action : String;
  details : String;

  
  constructor(appointments) {
    {
      this.id = appointments.id || this.getRandomID();
      this.img = appointments.avatar || 'assets/images/user/usrbig1.jpg';
      this.name = appointments.name || '';
       this.dateTime = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.type = appointments.type || '';
      this.status = appointments.status || '';
      this.action = appointments.action || '';
      this.details = appointments.details || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
