import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { ApiResponse } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://01.fy25ey01.64mb.io/';

  fetchTeamData(): Observable<ApiResponse> {
    
    return this.http.get<ApiResponse>(this.baseUrl);
  }
}
