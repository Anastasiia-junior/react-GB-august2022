import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getGists, getUserGist} from '../store/gists-reducer';

export const GistsPage = () => {

    const pagination = [1,2,3,4,5,6,7,8,9];

    const {gistsArray, pending, error, gistsByName, searchPending, searchError} = useSelector((state) => state.gists);
    

    const dispatch = useDispatch();

    useEffect( 
        () => {
            if(gistsArray.length === 0) {
                dispatch(getGists());
            }
        },
        [dispatch, gistsArray]
    )

    if (error) {
        return <h1>error ...</h1>;
      }

        return (
        <div>
            <div>
                {pagination.map((page, index) => {
                    return (<button key={index} onClick={() => {dispatch(getGists(page))}}>{page}</button>)
                })}
            </div>
            <h1>GistsPage</h1>
            {pending ? <h1> pending...</h1> : gistsArray.map((gist, index) => {
                return (
                    <p key={index}>{gist.url}</p>
                )
            })}
            <hr></hr>
            <div>
            <button onClick={() => dispatch(getUserGist())}>select 'bogdanq' user</button>
            {searchPending ? <h3>search pending...</h3> : gistsByName.map((gist, index) => {
                return (
                    <p key={index}>{gist.url}</p>
                )
            })}
            </div>
        </div>
        )
}