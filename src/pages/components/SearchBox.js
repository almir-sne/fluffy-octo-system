import React from 'react';

export default ({handleChange, options, handleSearch}) =>
    <div className="row search-box">
        <div className="col-sm-5">
            <div className="input-group">
                <input type="text" className="form-control" name="query" onChange={handleChange}/>
                <div className="input-group-addon">
                    <div className="select-wrapper">
                        <select name="queryType" onChange={handleChange}>
                            {options.map(({label, value}) =>
                                <option key={value} value={value}>{label}</option>)}
                        </select>
                    </div>
                    <button className="btn" type="submit" onClick={handleSearch}><i
                        className="fa fa-search"/></button>
                </div>
            </div>
        </div>
    </div>