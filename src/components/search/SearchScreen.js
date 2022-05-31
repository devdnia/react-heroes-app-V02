import { useMemo } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from '../hero/HeroCard';
import { getHeroByName } from "../selectors/getHeroesByName";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFileted = useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Search a hero..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-2"
                            type="submit"
                        >
                            Search...
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q==='')
                            ? <div className="alert alert-info animate__animated animate__fadeIn">Search a hero</div>
                            : ( heroesFileted.length === 0 )
                                && <div className="alert alert-danger animate__animated animate__fadeIn">There is no result: { q} </div>  
                    }

                    {
                        heroesFileted.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                { ...hero }
                            />
                        ))

                    }
                </div>
            </div>
        </>
    )
}