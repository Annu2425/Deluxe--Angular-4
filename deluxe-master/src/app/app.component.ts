import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { HttpClient } from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { toBlob } from 'canvas-toBlob';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deluxdemo';
  canvas: any;
  url = '';
  uploadNewImage = false;
  svg_json=false;
  arrSvg: string[];
  
  constructor(private httpService: HttpClient)
  {
    
  }


  ngOnInit() {

//Adding image to canvas
    // var canvas = new fabric.Canvas('canvas');

    // fabric.Image.fromURL('company_name.svg',function(img)
    // {
    //   canvas.add(img);
    // })
      

    // Saving image to local

    $("#b").click(function(){

        $("#canvas").get(0).toBlob(function(blob){
          saveAs(blob,"myImg.png");
        });
    });
  

//   $(".switch").click(function()
//   {
//     $('#canvas').css(
//       'border:20px;'
//     )
//   });
// 
  }
  
  


  onSelectFile(event) {
    this.uploadNewImage = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.canvas = new fabric.Canvas('canvas');
      fabric.Image.fromURL(this.url, (img) => {
        this.canvas.add(img);
        console.log(this.url);
      });
    }
  }

  addFabricText() {
    this.canvas = new fabric.Canvas('canvas');
    this.canvas.add(new fabric.IText('new text'));


  //   let rect = new fabric.Text('New Text',{
  //    top:Math.floor(Math.random()*350+1),
  //    left:Math.floor(Math.random()*250+1),
  //    fill:'red'
  
  
  //  });
  //  this.canvas.add(rect);
  // }

}
}
