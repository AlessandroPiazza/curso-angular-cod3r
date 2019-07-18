import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from '@angular/core'
import { Http } from "@angular/http";
import { ErrorHandler } from '../app.error-handler'

import { MEAT_API } from '../app.api'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from "rxjs/Observable";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
    
    constructor(private http: Http){}
    
    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map( res => res.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantsById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map( res => res.json())
        .catch(ErrorHandler.handleError)
    } 
    
    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map( res => res.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map( res => res.json())
        .catch(ErrorHandler.handleError)
    }
}