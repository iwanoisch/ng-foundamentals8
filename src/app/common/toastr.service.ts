// import {Injectable} from '@angular/core';
//
// declare let toastr: any;
//
// @Injectable()
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message);
//   }
//
//   info(message: string, title?: string) {
//     toastr.info(message);
//   }
//
//   warning(message: string, title?: string) {
//     toastr.warning(message);
//   }
//
//   error(message: string, title?: string) {
//     toastr.error(message);
//   }
// }
import {InjectionToken} from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success (msg: string, title?: string):void;
  info (msg: string, title?: string):void;
  warning (msg: string, title?: string):void;
  error (msg: string, title?: string):void;
}
