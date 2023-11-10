// import { stringify } from "querystring";
// import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector:'crud',
    templateUrl:'./crud.component.html'
})
export class Crud
{
    indiData:object = {email:" ",password:" ",isReady:true};
    userData:object[]=[{}];

    dataHandler(event){
       let ids:string = event.target.id;
       let data:any = event.target.value;

        switch (ids) {
            case "emId":
            //  this.indiData.email = data;
                this.indiData = {...this.indiData,email:data};
                break;
                case "psId":
                    // this.indiData.password = data;
                    this.indiData = {...this.indiData,password:data};
                    break;
                    case "chId":
                        // this.indiData.isReady = data;
                        this.indiData = {...this.indiData,isReady:data};
                break;
               
                case "btn1":
                 console.log(this.indiData)
                 this.userData.push(this.indiData);
                 console.log(this.userData);
                break;
        
            default:
                break;
        }
        console.log(event.target.id);
   }
}