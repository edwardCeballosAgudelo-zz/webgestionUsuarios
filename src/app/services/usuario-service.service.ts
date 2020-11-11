import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.urlApi}${environment.getUsers}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  public addUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.urlApi}${environment.addUser}`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<Usuario>('addUser'))
      );
  }

  public getUserByDocument(documento: string): Observable<Usuario> {
    const url = `${environment.urlApi}${environment.getUsersByDocument}${documento}`;
    return this.http.get<Usuario>(url).pipe(
      catchError(this.handleError<Usuario>(`getUserByDocument documento=${documento}`))
    );
  }

  public deleteUser(documento: string): Observable<Usuario> {
    const url = `${environment.urlApi}${environment.deleteUser}/${documento}`;
    return this.http.delete<Usuario>(url, this.httpOptions).pipe(
      catchError(this.handleError<Usuario>('deleteUser'))
    );
  }

  public updateUser(documento: string, usuario: Usuario): Observable<any> {
    const url = `${environment.urlApi}${environment.editUsersByDocument}/${documento}`;
    return this.http.put(url, usuario, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateUsers'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error.error.message);
    };
  }
}
