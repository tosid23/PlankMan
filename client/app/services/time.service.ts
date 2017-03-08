import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeService{
    constructor(private http: Http){
        console.log('Time Serv Init...');
    }
    
    getTime(){
        return this.http.get('http://localhost:3000/api/time')
            .map(res => res.json()); 
    }
    
    addTime(newTime){
        console.log(newTime);
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/api/time',JSON.stringify(newTime),{headers:headers})
            .map(res => res.json());
    }
    
    deleteTime(id){
        return this.http.delete('http://localhost:3000/api/time/'+id)
            .map(res => res.json());
    }
}