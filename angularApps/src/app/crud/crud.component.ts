import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";
import { timeStamp } from "console";


@Component({
    selector:'crud',
    templateUrl:'./crud.component.html'
})
export class Crud
{
    indiData:object = {email:" ",password:" ",isReady:false};
    email:string = " "
    password:string = ""
    isReady:boolean = false;
    date = new Date();
    money:number = 100000;
    
    empData :object[]=[
        {empId:1,name:"Manish",loc:'Pune',salary:10000},
        {empId:2,name:"Manisha",loc:'Mumbai',salary:20000},
        {empId:3,name:"Mani",loc:'Pura',salary:30000}
    ]


    userData:object[]=[{}];

//     dataHandler(event){
//    let id = event.target.id;

//    if(id == "btn1"){
//     //    console.log(this.email);
//     //    console.log(this.password);
//     //    console.log(this.isReady);
//     //    this.userData.push({email:this.email,password:this.password,isReady:this.isReady})
//        console.log(this.userData)
//    }
//    else if(id=="upbtn"){

    


//    }
//    else if(id=="emId"){
//       if(this.userData.length > 1){
//        let data= this.userData.find(x=>x.email == this.email);
//        this.password = data.password;
//        this.isReady= data.isReady;
//       }
//    }
       

    //    let ids:string = event.target.id;
    //    let data:any = event.target.value;

      // console.log(this.indiData.email);

       
        // switch (ids) {
        //     case "emId":
        //      this.indiData = {...this.indiData,email:data};
        //      if(this.userData.length != 0){
        //         console.log("working..")
        //         let value = this.userData.find(x=>x.email == this.indiData.email);

        //          this.indiData = {...value,password:value.password,isReady:value.isReady};

        //         console.log(this.indiData);
        //      }
        //         break;
        //         case "psId":
        //             this.indiData={...this.indiData,password: data}
        //         break;
        //         case "chId":
        //            let chkVal = event.target.checked;
        //             this.indiData={...this.indiData,isReady: chkVal}
        //         break;
               
        //         case "btn1":
              
        //          this.userData.push(this.indiData);
               
        //         break;
        //         case "upbtn":              
               
                 
                
                
                
               
        //         break;
        
        //     default:
        //         break;
        // }
        // console.log(event.target.id);
//    }
}

// // import { stringify } from "querystring";
// // import { ThrowStmt } from "@angular/compiler";
// import { Component } from "@angular/core";


// @Component({
//     selector:'crud',
//     templateUrl:'./crud.component.html'
// })
// export class Crud
// {
//     indiData:object = {email:" ",password:" ",isReady:false};
//     userData:object[]=[ {email:" ",password:" ",isReady:false}];

//     dataHandler(event){

//         let id = event.target.id;
//         if(id == "btn1"){

//             console.log(this.indiData);
//             this.userData.push(this.indiData);
//         }
//         else if(id == "upbtn")
//         {

//         }
//         else if(id == "emId")
//         {

//         }
//     //    let ids:string = event.target.id;
//     //    let data:any = event.target.value;

//         // switch (ids) {
//         //        case "emId":
//         //             //  this.indiData.email = data;
//         //                 this.indiData = {...this.indiData,email:data};  
//         //                 if(this.indiData.length != 0)
//         //                 {
//         //                     console.log("Working.....");
//         //                     let value = this.userData.find(x=> x.email == this.indiData.email);
//         //                     this.indiData = (...this.indiData,password:this.indiData.password,isReady:this.indiData.isReady)
//         //                 }     
                
//         //             // this.indiData = {...this.indiData,email:data};
//         //             // if(this.userData.length != 0){
//         //             // let value =this.userData.find(x=>x.email == this.indiData.email);
//         //             // }
//         //              break;
//         //         case "psId":
//         //             this.indiData = {...this.indiData,password:data};
//         //             break;
//         //         case "chId":
//         //                 // this.indiData.isReady = data;
//         //                 let chkVal = event.target.checked;
//         //                 this.indiData = {...this.indiData,isReady:chkVal};
//         //             break;
               
//         //         case "btn1":
//         //         //  console.log(this.indiData)
//         //          this.userData.push(this.indiData);
//         //          console.log(this.userData);
//         //              break;

//         //         case "upbtn":
        
//         //             this.userData.forEach((value,indx,arr)=>{
//         //                 if(value.email == this.indiData.email){
//         //                     console.log(value);
                            
//         //                 }
//         //             }); 
//         //         //console.log(value);
//         //         this.userData.push(this.indiData);
                
//         //         break;
        
//         //     default:
//         //         break;
//         // }
//         console.log(event.target.id);
//    }
// }
