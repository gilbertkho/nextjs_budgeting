
const UrunanParticipants = (props) => {


    return <div className="flex gap-[4px]">
        <input type="text" placeholder="Name" className="p-[2px] rounded-[4px]" value={props.name} onChange={props.onChangeInput}/>
        <input type="number" placeholder="Spent" className="p-[2px] rounded-[4px]" value={props.spent} onChange={props.onChangeNumber}/>
    </div>
}

export default UrunanParticipants;