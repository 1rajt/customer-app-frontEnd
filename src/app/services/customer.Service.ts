import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
 import { Customer } from '../models/customer';
 const baseUrl =
     'http://localhost:4000/users';
@Injectable({ providedIn: 'root' })
export class CustomerService {

   constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Customer[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Customer>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}
