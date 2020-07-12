import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/_model/photo';
import { environment } from 'src/environments/environment';
import { EmployeeService } from 'src/app/_services/employee.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {

  slidesStore:Photo[];

  imageUrl: string = "../../assets/images/default-image.png";
  fileToUpload: File = null;
  @Input() editID: number;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],

    nav: false
  }


  constructor(private imageService:EmployeeService ) { }

  ngOnInit(): void {

    this.imageService.readFile(this.editID).subscribe(data=>
      {

          this.slidesStore = data;

      });


  }



handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);

  //Show image preview
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}

OnSubmit(Caption,Image){
 this.imageService.postFile(Caption.value,this.fileToUpload,this.editID).subscribe(
   data =>{

     Caption.value = null;
     Image.value = null;
     this.imageUrl = "/assets/images/default-image.png";
   }
 );
}

}
