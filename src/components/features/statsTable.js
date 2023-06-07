import React from 'react';
import './statsTable.css';

function StatsTable() {
  return (
    <div className='table-main'>
      <div className='box'>
        <table className='stats-table'>
          <thead>
            <tr>
              <th>Game</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatsTable;
