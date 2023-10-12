import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../productmodel/product';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  url:string= "http://localhost:3000/";

  constructor(private http:HttpClient,private router:Router) { }

  getProduct():Observable<Product[]>
  {
    //return this.http.get<Product[]>(this.produrl);
    return this.http.get<Product[]>(this.url+"products");
  }
  deleteProduct(id:number)
  {
    window.location.reload()
    //return this.http.delete(this.produrl+id); 
   return this.http.delete(this.url+"Product"+"/"+id);
  }
  addProd(prod:Product)
  {
    alert("JJJJ");
    //return this.http.post(this.produrl,prod);
    console.log(prod.productName);
    // return this.http.post(this.url+"Product",prod);
    return this.http.post("http://localhost:3000/Product",prod);
  }

  updateprod(product:Product):Observable<Product>
  {
    alert("Hi");
    //return this.http.put<Product>(this.produrl+product.id,product)
    return this.http.put<Product>(this.url+"product"+"/"+product.id,product)
  }


}
