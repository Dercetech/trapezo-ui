import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

export class ToolbarService {

  private _title$: BehaviorSubject<String> = new BehaviorSubject('title not set');
  public readonly title$: Observable<String> = this._title$.asObservable();

  public setTitle(title:string){
    this._title$.next(title);
  }
}
