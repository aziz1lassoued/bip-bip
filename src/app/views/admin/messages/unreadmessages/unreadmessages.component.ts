import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-unreadmessages',
  templateUrl: './unreadmessages.component.html',
  styleUrls: ['./unreadmessages.component.css']
})
export class UnreadmessagesComponent implements OnInit {
  id: any;
  dataArray: any;
  data:any
  constructor(private route:ActivatedRoute,private ds:DataService) { 
    this.route.params.subscribe(params =>this.id=params.id)   
    this.ds.readMessage(this.id).subscribe((Response:any)=>{
      this.dataArray=Response.data.message
      console.log(this.dataArray)
      
    })

    this.ds.getAllMessagesFromClient().subscribe((response: any) => {
      this.data = response.data.doc
      console.log(this.data)

    })
  
  }

  ngOnInit(): void {this.ds.allUnReadedMessage() 
  }

}
