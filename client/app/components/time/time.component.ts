import { Component } from '@angular/core';
import {TimeService} from '../../services/time.service';
import {Time} from '../../../Time';

@Component({
moduleId : module.id,
  selector: 'time',
  templateUrl: 'time.component.html',
})

export class TimeComponent { 

    times: Time[];
    time : string;
    
    constructor(private timeService: TimeService){
        this.timeService.getTime()
            .subscribe(time => {
                this.times = time;
            });
    }
    
    addTime(event){
        event.preventDefault();
        
        var newTime = {
            username : "Siddharth Jaswal",
            time: this.time
        }
        
        this.timeService.addTime(newTime)
            .subscribe(time => {
                this.times.push(time);
                this.time = '';
            })
    }
    
    
    deleteTime(id){
        var times = this.times;
        
        this.timeService.deleteTime(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0 ; i< times.length; i++){
                    if(times[i]._id == id){
                        times.splice(i, 1);
                    }
                }
            }
        });
    }

}