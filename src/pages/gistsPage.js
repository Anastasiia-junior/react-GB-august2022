import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getGists} from '../store/gists-reducer';

export const GistsPage = () => {

    const pagination = [1,2,3,4,5,6,7,8,9];

    const {gists, pending, error} = useSelector((state) => {
        console.log(state);
        return state.gists;
    });

    const dispatch = useDispatch();

    useEffect( 
        () => {
            if(gists.length === 0) {
                dispatch(getGists());
            }
        },
        [dispatch, gists]
    )

    if (error) {
        return <h1>error ...</h1>;
      }

        return (
        <div>
            <div>
                {pagination.map((page, index) => {
                    return (<button key={index} onclick={() => {dispatch(getGists(page))}}>{page}</button>)
                })}
            </div>
            <h1>GistsPage</h1>
            {pending ? <h1> pending...</h1> : gists.map((gist, index) => {
                return (
                    <p key={index}>{gist.url}</p>
                )
            })}
        </div>
        )
}