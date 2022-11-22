import { Pipe } from "@angular/core";

@Pipe({
    name: 'filterBy'
})
export class ContactFilterPipe {
    transform(value: any[], fieldName: string, online: boolean): any {
        if(online) {
            return value.filter((e) => { return (e[fieldName] === 'available' || e[fieldName] === 'busy' || e[fieldName] === 'away'); });
        }
        else return value.filter((e) => { return (e[fieldName] === 'offline'); });
    }
}
@Pipe({
    name: 'myStatus'
})
export class StatusPipe {
    transform(value: string): any {
        if (value === 'Available') return 'linear-gradient(45deg, #93ff82, transparent)'
        else if (value === 'Offline') return 'transparent'
        else if (value === 'Busy') return 'linear-gradient(45deg, #ff6161, transparent)'
        else return  'linear-gradient(45deg, #ffad00, transparent)'
    }
}
@Pipe({
    name: 'status'
})
export class ContactStatusPipe {
    transform(value: string): any {
        if (value === 'available') return '#93ff82'
        else if (value === 'offline') return 'transparent'
        else if (value === 'busy') return '#ff6161'
        else return '#ffad00'
    }
}