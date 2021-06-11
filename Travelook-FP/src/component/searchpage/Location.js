import React from 'react';

const Location =({locstate,onCheckLoc})=>{

    

    return(
        <div>

            {locstate.map((user,i)=>{
                return (
                    <div>
                        {/* <p><input type="checkbox" name={locstate[i]} value={locstate[i]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[i]}</span></p>  */}
                        <p><input type="checkbox" name="locate" value={locstate[i]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[i]}</span></p> 
                    </div>
                    
                 )
             })


            } 

            
        </div>
    )
}

export default Location



/* <p><input type="checkbox" name="locate" value={locstate[0]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[0]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[1]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[1]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[2]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[2]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[3]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[3]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[4]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[4]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[5]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[5]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[6]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[6]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[7]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[7]}</span></p>
                        <p><input type="checkbox" name="locate" value={locstate[8]} onChange={onCheckLoc} defaultChecked={false} style={{marginTop: 10, cursor: 'pointer'}} /><span style={{marginLeft:10}}>{locstate[8]}</span></p> */