import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/_model/photo';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  imageUrl: string = "../../assets/image/user.png";
  fileToUpload: File = null;



  @Input() photos: Photo[];

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(private imageService:EmployeeService ) { }

  ngOnInit(): void {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url:'http://127.0.0.1:8000/api/employeecloud/1',


      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

this.uploader.onAfterAddingFile = (file) => {file.withCredentials=false;};

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          emp_id:res.emp_id,
          url: res.url,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);

  }
    };

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
 this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
   data =>{
     console.log('done');
     Caption.value = null;
     Image.value = null;
     this.imageUrl = "/assets/img/default-image.png";
   }
 );
}

}
