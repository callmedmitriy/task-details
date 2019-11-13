import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
/*import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from '../actions/actionTypes';
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from '../actions/actionCreators';
*/
import { LIST_REQUEST, SERVICE_REQUEST } from '../actions/actionTypes'
import { listSuccess, listFailture, serviceSuccess, serviceFailture } from '../actions/actionCreators'
import { of } from 'rxjs';
/*
export const changeSearchEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map(o => o.payload.search.trim()),
    filter(o => o !== ''),
    debounceTime(100),
    map(o => searchSkillsRequest(o))
)

export const searchSkillsEpic = action$ => action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    map(o => o.payload.search),
    map(o => new URLSearchParams({ q: o })),
    tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`).pipe(
        retry(3),
        map(o => searchSkillsSuccess(o)),
        catchError(e => of(searchSkillsFailure(e))),
    )),
);*/

export const searchLinksEpic = action$ => action$.pipe(
  ofType(LIST_REQUEST),
  tap(o => console.log('epic search links',o)),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}`).pipe(
    retry(3),
    map(o => listSuccess(o)),
    catchError(e => of(listFailture(e))),
  )),
);

export const searchServiceEpic = action$ => action$.pipe(
  ofType(SERVICE_REQUEST),
  map(o => o.payload.id),
  tap(o => console.log(o)),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/${o}`).pipe(
    retry(3),
    map(o => serviceSuccess(o)),
    catchError(e => of(serviceFailture(e))),
  )),
);