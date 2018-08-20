import { ajax } from "rxjs/ajax";
import { take, catchError } from "rxjs/operators";

const getUser = user =>
  new Promise((resolve, reject) =>
    ajax
      .getJSON(`https://api.github.com/users/${user}`)
      .pipe(
        take(1),
        catchError(e => reject({ error: e }))
      )
      .subscribe(user => resolve(user))
  );
export { getUser };
