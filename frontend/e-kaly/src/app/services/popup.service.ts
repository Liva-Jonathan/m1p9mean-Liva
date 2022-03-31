import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  success(message : string) : void {
    const title = "Success";
    const icon : SweetAlertIcon= "success";
    Swal.fire(title, message, icon);
  }

  error(title : string, message : string) : void {
    const icon : SweetAlertIcon= "error";
    Swal.fire(title, message, icon);
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
