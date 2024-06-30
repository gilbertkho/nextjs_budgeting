
const Participants = (props) => {


    return <div className="flex gap-[4px]">
        <input type="text" placeholder="Participant" className="p-[2px] rounded-[4px]" value={props.value} onChange={props.onChangeInput}/>
    </div>
}

export default Participants;