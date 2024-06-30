
const UrunanParticipants = (props) => {


    return <div className="flex gap-[4px]">
        <select type="" placeholder="Name" value={props.name} className="p-[2px] rounded-[4px]" onChange={props.onChangeInput}>
            {props.participants.length > 0 ? 
                props.participants.map((par,index) => {
                    return (
                        <option value={par} key={index}>{par}</option>
                    )
                })
            : null}
        </select>
        <input type="number" placeholder="Spent" className="p-[2px] rounded-[4px]" value={props.spent} onChange={props.onChangeNumber}/>
    </div>
}

export default UrunanParticipants;