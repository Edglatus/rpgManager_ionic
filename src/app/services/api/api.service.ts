import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export abstract class ApiService<T> {
  constructor(protected http: HttpClient) { }

  apiUrl = 'http://localhost:3000/';

  httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json' }) };

  // Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Get
  getAll(): Observable<T> {
    return this.http.get<T>(this.apiUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getOneByID(id: number): Observable<T> {
    return this.http.get<T>(this.apiUrl + '/' + id).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Post
  create(entity): Observable<T> {
    return this.http.post<T>(this.apiUrl, JSON.stringify(entity), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Put
  update(id: number, entity: T): Observable<T> {
    return this.http.put<T>(this.apiUrl + '/' + id, JSON.stringify(entity), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + '/' + id).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
