import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { getData } from '../actions/dataActions';

const Data = props => {
    const [year, setYear] = useState('')
    const [round, setRound] = useState('')
    
    const handleYear = (e) => {
        setYear(e.target.value);
    }

    const handleRound = (e) => {
        setRound(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(year, round)
        props.getData(year, round);
    }

    return (
        <div className='flex'>
            <form onSubmit={handleSubmit}>
                <label>Year:</label>
                <select
                    value={year}
                    onChange={handleYear}
                >
                    <option value='2014'>2014</option>
                    <option value='2015'>2015</option>
                    <option value='2016'>2016</option>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='current'>2019</option>
                </select>
                <label>Round:</label>
                <select
                    value={round}
                    onChange={handleRound}
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='last'>21</option>
                </select>
                
                <button type='submit'>Get Results</button>
            </form>
            {/* <button onClick={props.getData}>Get Results</button> */}
            {!props.raceData && !props.isFetching && <p>Fetch the results from any Formula 1 race using the form</p>}
            {props.isFetching && (
                <>
                <br />
                <Spinner animation="border" variant="danger" />
                </>
            )}
            {props.raceData && 
            <div className='results'>
                <h2>Results for the</h2>
                <h3>{props.raceData.season} {props.raceData.raceName}</h3>
                <h4>Race #{props.raceData.round} of the {props.raceData.season} season.</h4>
                <div className='podium'>
                <h2>Winner: {props.raceData.winner.Driver.givenName} {props.raceData.winner.Driver.familyName}</h2>
                <h2>Second: {props.raceData.second.Driver.givenName} {props.raceData.second.Driver.familyName}</h2>
                <h2>Third: {props.raceData.third.Driver.givenName} {props.raceData.third.Driver.familyName}</h2>
                </div>
            </div>
            }
        </div>
  );
};

const mapStateToProps = state => {
  return {
        raceData: state.raceData,
        error: state.error,
        isFetching: state.isFetching
    };
};

export default connect(
  mapStateToProps,
  { getData }
)(Data);