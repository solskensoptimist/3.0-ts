import React from 'react';
import {ProspectSubComponent} from './subcomponents/prospect_sub_component';
import {AppState} from 'store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

// ag-grid
let rows: Array<any> = [];
for (let i = 0; i < 100; i++) {
    rows.push({
        row: i,
        activity: 'Sälja bil',
        user: 'Kvinna, 46, DEGERFORS',
        noOfCars: 15,
        noOfMatchingCars: 11,
        matchingCars: 'SKODA, PICK-UP 1, VOLVO 940 och 8 till'
    });
}
const gridOptions = {
    columnDefs: [
        {field: 'row', headerName: 'Rad',},
        {field: 'activity', headerName: 'Aktivitet2',},
        {field: 'user', headerName: 'Brukare'},
        {field: 'noOfCars', headerName: 'Antal fordon',},
        {field: 'noOfMatchingCars', headerName: 'Antal matchande fordon'},
        {field: 'matchingCars', headerName: 'Matchande fordon'},
    ],
    rowData: rows
};

type Props = {
};

type State = {}; // Ska använda ProspectState från store/prospect/reducer istället.

class ProspectComponent extends React.Component<Props, State> {
    // constructor(props: any) {
    //     super(props);
    // }

    render () {
        return (
            <div>
                <div>
                    <Button className='hej'>Semantic-UI</Button>
                    <p>Text</p>
                </div>
                <div className="ag-theme-balham" style={ {height: '600px', width: '100%'} }>
                    <AgGridReact
                        columnDefs={gridOptions.columnDefs}
                        rowData={gridOptions.rowData}>
                    </AgGridReact>
                </div>
                <ProspectSubComponent />
            </div>
        );
    }
}

const MapStateToProps = (state: AppState) => {
    return {
    };
};

const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
    };

};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(ProspectComponent);
