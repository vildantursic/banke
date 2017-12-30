import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MainService} from "../main.service";

@Injectable()
export class BlogService {


  constructor(private service: MainService) { }

  /**
   * Gets array of blogs
   * @returns {Observable<any>}
   */
  getBlogs(): Observable<any> {
    return this.service.get(`blog`);
  }

  /**
   * Gets blog
   * @param {string} slug
   * @returns {Observable<any>}
   */
  getBlog(slug: string): Observable<any> {
    return this.service.get(`blog/${slug}`);
  }

}
