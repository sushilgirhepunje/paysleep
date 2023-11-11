// import { stringify } from "querystring";
// import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector:'crud',
    templateUrl:'./crud.component.html'
})
export class Crud
{
    indiData:object = {email:" ",password:" ",isReady:false};
    userData:object[]=[ {email:" ",password:" ",isReady:false}];

    dataHandler(event){
       let ids:string = event.target.id;
       let data:any = event.target.value;

        switch (ids) {
               case "emId":
                    //  this.indiData.email = data;
                        this.indiData = {...this.indiData,email:data};  
                        if(this.indiData.length != 0)
                        {
                            console.log("Working.....");
                            let value = this.userData.find(x=> x.email == this.indiData.email);
                            this.indiData = (...this.indiData,password:this.indiData.password,isReady:this.indiData.isReady)
                        }     
                
                    // this.indiData = {...this.indiData,email:data};
                    // if(this.userData.length != 0){
                    // let value =this.userData.find(x=>x.email == this.indiData.email);
                    // }
                     break;
                case "psId":
                    this.indiData = {...this.indiData,password:data};
                    break;
                case "chId":
                        // this.indiData.isReady = data;
                        let chkVal = event.target.checked;
                        this.indiData = {...this.indiData,isReady:chkVal};
                    break;
               
                case "btn1":
                //  console.log(this.indiData)
                 this.userData.push(this.indiData);
                 console.log(this.userData);
                     break;

                case "upbtn":
        
                    this.userData.forEach((value,indx,arr)=>{
                        if(value.email == this.indiData.email){
                            console.log(value);
                            
                        }
                    }); 
                //console.log(value);
                this.userData.push(this.indiData);
                
                break;
        
            default:
                break;
        }
        console.log(event.target.id);
   }
}
/*
import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector:'crud',
    templateUrl:'./crud.component.html'
})
export class Crud
{
    indiData:object = {email:" ",password:" ",isReady:false};
    userData:object[]=[{email:" ",password:" ",isReady:false}];

    dataHandler(event){
       let ids:string = event.target.id;
       let data:any = event.target.value;
       
        switch (ids) {
            case "emId":
             this.indiData = {...this.indiData,email:data};
             if(this.userData.length != 0){
             let value =this.userData.find(x=>x.email == this.indiData.email);

            
             }
                break;
                case "psId":
                    this.indiData={...this.indiData,password: data}
                break;
                case "chId":
                   let chkVal = event.target.checked;
                    this.indiData={...this.indiData,isReady: chkVal}
                break;
               
                case "btn1":
                 
                 this.userData.push(this.indiData);
               
                break;
                case "upbtn":
                 
                this.userData.forEach((value,indx,arr)=>{
                  if(value.email == this.indiData.email){
                    
                  }
                }); 
                 //console.log(value);
                 this.userData.push(this.indiData);
               
                break;
        
            default:
                break;
        }
        console.log(event.target.id);
1    }
}
*/ 