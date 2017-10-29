import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {RedcrossInfoService} from "./RedcrossInfoService";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RedcrossHttp {

    private static errorMessage(status: number): string {
        return `Request failed with status: ${status}`;
    }

    constructor(
        private _angularHttp: Http,
        private _infoService: RedcrossInfoService
    ) {}

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._angularHttp
            .get(url, options)
            .catch(error => {
                this._infoService.notifyInfo(RedcrossHttp.errorMessage(error.status));
                return Observable.throw(error);
            })
            .share();
    }

    public deleteReq(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._angularHttp
            .delete(url, options)
            .catch(error => {
                this._infoService.notifyInfo(RedcrossHttp.errorMessage(error.status));
                return Observable.throw(error);
            })
            .share();
    }

    public postJSONString(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._angularHttp
            .post(url, body, options)
            .catch(error => {
                this._infoService.notifyInfo(RedcrossHttp.errorMessage(error.status));
                return Observable.throw(error);
            })
            .share();
    }
}
