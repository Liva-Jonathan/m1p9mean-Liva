import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  success(title : string, message : string) : void {
    const icon : SweetAlertIcon = "success";
    // Swal.fire(title, message, icon);
    Swal.fire({title: title, text: message, icon: icon, confirmButtonColor: "#5cb85c"});
  }

  error(title : string, message : string) : void {
    const icon : SweetAlertIcon= "error";
    Swal.fire({title: title, text: message, icon: icon, confirmButtonColor: "#292b2c"});
  }

  confirm(message : string, confirmButtonText : string, onConfirm : any, onCancel : any) : void {
    Swal.fire({
      title: 'Avertissement',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      cancelButtonText : 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else {
        onCancel();
      }
    })
  }

}
