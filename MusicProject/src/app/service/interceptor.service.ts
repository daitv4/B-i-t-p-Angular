import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = req.clone({setHeaders: { Authorization: `Authorization: Bearer BQDjVEAlAnWHhK-MIaX9VNfcw1VeoUjrxOoOge4dVsdPgDac4DlpvZ6vDHXGZcoF0jQiWOVO0PYz-DpghBz9r90gFj5omMXHvd4VSFnhu-rFUD3gOp5IbsuAHuxb2uj1WSBbQYt2NChwTofzGqLszh3Mu64wTmy6VC5ILc493oDRIHA` }});
    return next.handle(token);
  }
}
