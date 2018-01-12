import { Injectable } from '@angular/core';
import {MainService} from "../main.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GeneralService {

  constructor(private service: MainService) { }

  /**
   * Gets array of ads
   * @returns {Observable<any>}
   */
  getAds(): Observable<any> {
    return this.service.get(`ads`);
  }

  /**
   * Gets array of partners
   * @returns {Observable<any>}
   */
  getPartners(): Observable<any> {
    return this.service.get(`partners`);
  }

  /**
   * Subscribe to magazine
   * @returns {Observable<any>}
   */
  subscribeToMagazine(email: string): Observable<any> {
    return this.service.post(`subscribe`, {
      email: email
    });
  }

}
