import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  image: any;

  constructor(private http: HttpClient) { }

  getImage(food: any) {
    food.isImageLoading = true;

    const onSuccess = (image: any) => {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        food.imageSrc = reader.result;
      }, false);

      if (image) {
          reader.readAsDataURL(image);
      }

      food.isImageLoading = false;
    }
    const onError = (error: any) => {
      console.log(error);
      food.isImageLoading = false;
    }

    this.http.get(BASE_URL + '/images/' + food.image, { responseType: 'blob' }).subscribe(onSuccess, onError);
  }

}
