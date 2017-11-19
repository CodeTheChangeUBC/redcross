import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";

@Injectable()
export class RedcrossInfoService {
    constructor(
        private _snackBar: MatSnackBar
    ) {}

    public notifyInfo(info: string, duration: number = 1500): void {
        this._snackBar.open(
            info,
            "",
            {duration: duration} as MatSnackBarConfig
        );
    }
}
