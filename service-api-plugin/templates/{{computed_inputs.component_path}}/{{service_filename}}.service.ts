import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const BASE_URL = "http://{{ api_host }}:{{ api_port }}/{{ resource_name + 's' }}";

@Injectable({
  providedIn: 'root'
})
export class {{ service_classname }} {

  constructor(private http: HttpClient) { }

  {{ get_list }}(): Observable<any> {
    try {
      return this.http.get<any>(BASE_URL);
    } catch(error) {
      return of(new Error('Error loading {{ resource_name }} list.'));
    }
  }

  {{ get_item }}(id: any): Observable<any> {
    try {
      return this.http.get<any>(BASE_URL + '/' + id);
    } catch(error) {
      return of(new Error('Error loading selected {{ resource_name }}.'));
    }
  }

  {{ save_item }}({{ resource_camelcase }}: any): Observable<any> {
    try {
      return this.http.post<any>(BASE_URL, {{ resource_camelcase }});
    } catch (error) {
      return of(new Error('Error creating selected {{ resource_name }}.'));
    }
  }

  {{ edit_item }}({{ resource_camelcase }}: any): Observable<any> {
    try {
      return this.http.patch<any>(BASE_URL + '/' + {{resource_camelcase + '.id'}}, {{ resource_camelcase }});
    } catch (error) {
      return of(new Error('Error updating selected {{ resource_name }}.'));
    }
  }

  {{ remove_item }}(id: any): Observable<any> {
    try {
      return this.http.delete<any>(BASE_URL + '/' + id);
    } catch (error) {
      return of(new Error('Error deleting selected {{ resource_name }}.'));
    }
  }
}
