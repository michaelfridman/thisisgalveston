import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Frog from './frog.model';

@Injectable({
  providedIn: 'root'
})
export class FrogHttpService {
  // {"type": "RS512", "key": "-----BEGIN CERTIFICATE-----\nMIIDAzCCAeugAwIBAgIJPqBRwgDTwmKoMA0GCSqGSIb3DQEBCwUAMB8xHTAbBgNV\nBAMTFGZyaWRtYW4udXMuYXV0aDAuY29tMB4XDTIxMDgwMTE5MzY0NVoXDTM1MDQx\nMDE5MzY0NVowHzEdMBsGA1UEAxMUZnJpZG1hbi51cy5hdXRoMC5jb20wggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaWW3H/cAZBNHtQrrtJqo6N7Phh9W+\n/N75/7qgFWBAS/PrIJdflzzN/P+wfh80xARwqbpWnR12eNVXD6NrGxRHL4UsGeXy\n9G/ERlzPsH778xyG3XPr3+oHcTy6YtRL3p2x6odCXc9GmYsuZrRuJGa57TQDVDxG\ngZW0S1dv2bQw4YboO63kejN7BPum0G807kQcp1TZ4FJakKLSZ0JHxIKMax/NG1vp\n64QIs4ziUPl5TyfbIfIaHiTAMV/xTFKk5Yi8O9jrIMaEwitz8jmwxcRFq9gpht99\nxE9rlua2gZ0Kw4o4yoOl48u7iwbr0EAU5wK90OOEkEoZ+tk4tAT//N1rAgMBAAGj\nQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFOcKMc2rmg5E+0twuZxJTx83\no4VZMA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAql1acrmS1HaZ\nX34O8qyYbrN61Z+yNHwiaAFXTEwOi2xa92YDjduNwE0whebZR8BfHwUwzR72t+Z0\nvgLTElIAD5fbWhyzHcSFPdaJsd8wY5pLuADlUh2gC/umBbBc4AAQetkLHHSb3vfx\natT7rxWfdKW0M3r1WxsJDPOzz6L5EMl98lVvinTzOFiZY4Cj7BaVFjjtp8P0KaBg\ntocccpj5w60hpoRS5nxIiWfz8o5DBQg1vKa0Gba+UjvpD3Lnqk1wwchLTi6qWaMR\niIWZrK1IwM0JsjsMGxYFVrbbMbupDTKPWL3zHVyqMq8nLYntH1nTiT4h5MYSLEii\nchuROZ7zuA==\n-----END CERTIFICATE-----"}
  // private ApiURL: string = 'https://localhost:44308/api/Frog';
  private ApiURL: string = 'https://thisisgalveston.hasura.app/api/rest/frogs2';
    private ApiCreateURL: string = 'https://thisisgalveston.hasura.app/api/rest/add-frog';
  // private ApiURL: string = 'https://autofixlist.com/api/frogs';
  l
  constructor(private httpclient: HttpClient) { }

  getFrogs(): Observable<Frog[]> {
    return this.httpclient.get<Frog[]>(this.ApiURL,
            {headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'Eb7mgxquaHgFlKrcgszTqyXAoifeWMzE4ECZ63XiXn5iwJel3fgtYgBfn211l1ju'
      }});
  }

  createFrogs(payload: Frog): Observable<Frog> {
    console.log(payload);
      return this.httpclient.post<Frog>(this.ApiCreateURL, JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'Eb7mgxquaHgFlKrcgszTqyXAoifeWMzE4ECZ63XiXn5iwJel3fgtYgBfn211l1ju'
      }

    });
  }
}
